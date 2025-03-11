import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { selectCharacters } from '../../../redux/slices/charactersSlice';
import {
  setCharacterName,
  setOnlyFavourite,
  resetFilters,
  selectCharacterNameFilter,
  selectOnlyFavouriteFilter,
} from '../../../redux/slices/charactersFilterSlice';

import './Characters.scss';
import CharacterCard from './CharacterCard';
import EmptyCard from './EmptyCard';

// Типы:
import { Characters_Info } from '../../../redux/slices/charactersSlice';

const Characters = () => {
  const charactersData: Characters_Info[] = useSelector(selectCharacters);

  const characterNameFilter: string = useSelector(selectCharacterNameFilter);
  const onlyFavouriteFilter: boolean = useSelector(selectOnlyFavouriteFilter);

  const dispatch = useDispatch();

  // ИЗМЕНЕНИЕ ЗНАЧЕНИЯ ФИЛЬТРА "имя персонажа" (инпут):
  const handleCharacterNameFilterChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const target = event.target;
    dispatch(setCharacterName(target.value));
  };

  // ИЗМЕНЕНИЕ ЗНАЧЕНИЯ ФИЛЬТРА "любимые персонажи" (чекбокс)
  const handleOnlyFavouriteFilterChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const target = event.target;

    dispatch(setOnlyFavourite(target.checked));
  };

  // ФИЛЬТР ПЕРСОНАЖЕЙ (по имени; "только любимые"):
  const filterCharactersData = (): Characters_Info[] => {
    return charactersData.filter((characterInfo) => {
      const matchesName = characterInfo.name
        .toLowerCase()
        .includes(characterNameFilter.toLowerCase().trim());

      // переменной matchesFavourite присваивается значение, после проверки фильтра onlyFavouriteFilter
      const matchesFavourite: boolean = onlyFavouriteFilter
        ? characterInfo.isFavourite
        : true;

      return matchesName && matchesFavourite;
    });
  };

  // РЕСЕТ ФИЛЬТРОВ (для персонажей):
  const handleResetAllCharactersFilters = (): void => {
    dispatch(resetFilters());
  };

  // Подсветка текста по которому идет фильтр имен персонажей:
  const highLightNameFilter = (characterName: string, filterText: string) => {
    if (!filterText) return characterName;

    const regex = new RegExp(`(${filterText})`, 'gi');

    return characterName.split(regex).map((substring, i) => {
      if (substring.toLowerCase() === filterText.toLowerCase().trim()) {
        return (
          <span key={i} className="highlight-character-name">
            {substring}
          </span>
        );
      }

      return substring;
    });
  };

  const filteredCharacters: Characters_Info[] = filterCharactersData();

  return (
    <section className="aot-site__characters">
      <h1 className="aot-site__characters__title">Персонажи</h1>
      <div className="aot-site__characters__container aot-characters-container">
        <div className="aot-characters-container__filter characters-filter">
          <input
            onChange={handleCharacterNameFilterChange}
            className="characters-filter__name"
            type="text"
            placeholder="Найти персонажа по имени..."
            maxLength={25}
            value={characterNameFilter}
          />
          <label className="characters-filter__favourite">
            <input
              className="characters-filter__favourite__checkbox"
              type="checkbox"
              checked={onlyFavouriteFilter}
              onChange={handleOnlyFavouriteFilterChange}
            />
            Любимые персонажи
          </label>

          <button
            onClick={handleResetAllCharactersFilters}
            className="characters-filter__reset-btn"
            type="button"
          >
            Сбросить фильтры
          </button>
        </div>

        <ul className="aot-characters-container__list characters-list">
          {filteredCharacters.length > 0 ? (
            filteredCharacters.map((characterData: Characters_Info, index) => {
              return (
                <CharacterCard
                  id={characterData.id}
                  key={index}
                  name={highLightNameFilter(
                    characterData.name,
                    characterNameFilter
                  )}
                  img={characterData.img}
                  isFavourite={characterData.isFavourite}
                  description={characterData.description}
                />
              );
            })
          ) : (
            <EmptyCard
              title="Вы ввели некорректное имя персонажа, либо в данный момент у Вас нет
          любимых персонажей."
              description="Вы можете выбрать любого персонажа, нажав на зеленый флажок рядом с
          его именем."
            />
          )}
        </ul>
      </div>
    </section>
  );
};

export default Characters;
