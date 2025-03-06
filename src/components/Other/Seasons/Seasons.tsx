import React from 'react';
import { NavLink } from 'react-router-dom';

import './Seasons.scss';

import detailedSeasonsData from '../../../data/detailedSeasonsData';
import DetailedSeasonCard from './DetailedSeasonCard';

const Seasons = () => {
  return (
    <div className="aot-site__seasons">
      <h1 className="aot-site__seasons__title">Сезоны</h1>
      <div className="aot-site__seasons__list aot-seasons-list">
        {detailedSeasonsData.map((seasonDetails, index) => {
          return (
            <DetailedSeasonCard
              key={index}
              title={seasonDetails.title}
              img={seasonDetails.img}
              imgDescription={seasonDetails.imgDescription}
              seasonDescription={seasonDetails.seasonDescription}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Seasons;
