import React from 'react';

import { NavLink } from 'react-router-dom';

interface SeasonCardData {
  title: string;
  img: string;
  imgDescription: string;
  key: number;
}

const SeasonCard = (props: SeasonCardData) => {
  const { title, img, imgDescription } = props;

  return (
    <NavLink className="seasons-swiper-inner__elem" to="seasons">
      <img
        className="seasons-swiper-inner__elem__img"
        src={img}
        alt={imgDescription}
      ></img>
      <p className="seasons-swiper-inner__elem__title">{title}</p>
    </NavLink>
  );
};

export default SeasonCard;
