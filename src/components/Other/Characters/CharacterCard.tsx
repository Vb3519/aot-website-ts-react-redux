import React from 'react';
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs';

interface Character_info {
  name: string;
  img: string;
  description: string;
}

const CharacterCard = (props: Character_info) => {
  const { name, img, description } = props;

  return (
    <li className="characters-list__card character-card">
      <div className="character-card__inner">
        <div className="character-card__inner__heading">
          <h3 className="character-card__inner__heading__name">{name}</h3>
          <BsBookmarkStar className="character-card__inner__heading__label" />
        </div>
        <img className="character-card__inner__img" src={img}></img>
        <p className="character-card__inner__description">{description}</p>
      </div>
    </li>
  );
};

export default CharacterCard;
