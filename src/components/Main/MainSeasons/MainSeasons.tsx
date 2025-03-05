import React from 'react';

import seasonsData from '../../../data/seasonsData';

import './MainSeasons.scss';
import SeasonCard from './SeasonCard';

const SeasonsMain = () => {
  return (
    <section className="aot-site__main__seasons-block main-seasons-block">
      <div className="main-seasons-block__title-row">
        <h2 className="main-seasons-block__title-row__title">Сезоны</h2>
        <a className="main-seasons-block__title-row__button">Подробнее</a>
      </div>
      <div className="main-seasons-block__swiper main-seasons-swiper">
        <div className="main-seasons-swiper__inner seasons-swiper-inner">
          {seasonsData.map((season, index) => {
            return (
              <SeasonCard
                key={index}
                title={season.title}
                img={season.img}
                imgDescription={season.imgDescription}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SeasonsMain;
