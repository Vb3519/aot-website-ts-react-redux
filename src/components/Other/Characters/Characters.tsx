import React from 'react';

import './Characters.scss';
import charactersData from '../../../data/charactersData';
import CharacterCard from './CharacterCard';

const Characters = () => {
  return (
    <div className="aot-site__characters">
      <h1 className="aot-site__characters__title">Персонажи</h1>
      <div className="aot-site__characters__container aot-characters-container">
        <div className="aot-characters-container__filter characters-filter">
          <input
            className="characters-filter__name"
            type="text"
            placeholder="Найти персонажа по имени..."
          />
          <label className="characters-filter__favourite">
            <input
              className="characters-filter__favourite__checkbox"
              type="checkbox"
            />
            Любимые персонажи
          </label>
        </div>

        <ul className="aot-characters-container__list characters-list">
          {charactersData.map((characterData, index) => {
            return (
              <CharacterCard
                key={index}
                name={characterData.name}
                img={characterData.img}
                description={characterData.description}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Characters;
