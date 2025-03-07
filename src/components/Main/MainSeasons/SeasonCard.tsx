import React from 'react';
import { NavLink } from 'react-router-dom';

interface SeasonCardData {
  title?: string;
  img?: string;
  imgDescription?: string;
}

const SeasonCard = (props: SeasonCardData) => {
  const { title, img, imgDescription } = props;

  return (
    <div className="seasons-swiper-inner__elem">
      <img
        className="seasons-swiper-inner__elem__img"
        src={img}
        alt={imgDescription}
      ></img>
      <p className="seasons-swiper-inner__elem__title">{title}</p>
    </div>
  );
};

export default SeasonCard;
