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

// Типы:
import { Characters_Info } from '../../../redux/slices/charactersSlice';

const Characters = () => {
  const charactersData: Characters_Info[] = useSelector(selectCharacters);
  console.log('charactersData:', charactersData);

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
            <li className="characters-list__empty-card">
              <div className="characters-list__empty-card__inner empty-card__inner">
                <h2 className="empty-card__inner__title">
                  Вы ввели некорректное имя персонажа, либо в данный момент у
                  Вас нет любимых персонажей.
                </h2>
                <FaRegQuestionCircle className="empty-card__inner__label" />
                <p className="empty-card__inner__decription">
                  Вы можете выбрать любого персонажа, нажав на зеленый флажок
                  рядом с его именем.
                </p>
              </div>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default Characters;

// const highLightNameFilterMatch = (
//   characterName: string,
//   nameFilter: string
// ) => {
//   console.log('nameFilter:', nameFilter);
//   // if (!nameFilter) return;

//   const regex = new RegExp(`(${nameFilter})`, 'gi'); // 'gi' - опции (g - global; i - case insensitive (регистр неважен))

//   return characterName.split(regex).map((substring, i) => {
//     if (substring.toLowerCase() === nameFilter.toLowerCase().trim()) {
//       return (
//         <span key={i} className="highlight-character-name">
//           {substring}
//         </span>
//       );
//     }

//     return substring;
//   });
// };
