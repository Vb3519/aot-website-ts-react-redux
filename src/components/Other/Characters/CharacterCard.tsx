import React from 'react';
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux'; // отправка действия; выборка состояния
import {
  toggleFavourite,
  selectCharacters,
} from '../../../redux/slices/charactersSlice'; // действие

// Типы:
import { Characters_Info } from '../../../redux/slices/charactersSlice';

const CharacterCard = (props: Characters_Info) => {
  const { id, name, img, isFavourite, description } = props;
  const dispatch = useDispatch();

  const handleToggleFavourite = (id: string) => {
    dispatch(toggleFavourite(id));
  };

  return (
    <li className="characters-list__card character-card">
      <div className="character-card__inner">
        <div className="character-card__inner__heading">
          <h3 className="character-card__inner__heading__name">{name}</h3>
          <span
            onClick={() => {
              handleToggleFavourite(id);
            }}
          >
            {isFavourite ? (
              <BsBookmarkStarFill className="character-card__inner__heading__label" />
            ) : (
              <BsBookmarkStar className="character-card__inner__heading__label" />
            )}
          </span>
        </div>
        <img className="character-card__inner__img" src={img}></img>
        <p className="character-card__inner__description">{description}</p>
      </div>
    </li>
  );
};

export default CharacterCard;
