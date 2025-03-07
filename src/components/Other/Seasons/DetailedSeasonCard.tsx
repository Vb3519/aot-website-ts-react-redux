import React from 'react';
import { NavLink } from 'react-router-dom';

import SeasonCard from '../../Main/MainSeasons/SeasonCard';

interface DetailedSeasonCardData {
  title: string;
  img: string;
  imgDescription: string;
  seasonDescription: string;
}

const DetailedSeasonCard = (props: DetailedSeasonCardData) => {
  const { title, img, imgDescription, seasonDescription } = props;

  return (
    <div className="aot-site__seasons__list__wrapper">
      <div className="aot-seasons-list__elem">
        <img
          className="aot-seasons-list__elem__img"
          src={img}
          alt={imgDescription}
        ></img>
        <p className="aot-seasons-list__elem__title">{title}</p>
      </div>

      <div className="aot-seasons-list__description">
        <p className="aot-seasons-list__description__inner">
          {seasonDescription}
        </p>
      </div>
    </div>
  );
};

export default DetailedSeasonCard;

{
  /* <SeasonCard
  key={key}
  title={title}
  imgDescription={imgDescription}
  img={img}
/>; */
}
