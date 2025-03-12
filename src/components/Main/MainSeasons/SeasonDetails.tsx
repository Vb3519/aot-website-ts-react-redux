import React from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import detailedSeasonsData from '../../../data/detailedSeasonsData';

const SeasonDetails = () => {
  const params = useParams();
  console.log('params:', params);

  const currentSeason = detailedSeasonsData.find(
    (seasonInfo) => seasonInfo.seasonSlug === params.seasonSlug
  );

  if (!currentSeason) {
    return <h2>Сезон не найден</h2>;
  }

  return (
    <div className="aot-site__season-details season-details-wrapper">
      <div className="season-details-wrapper__inner season-details-inner">
        <div className="season-details-inner__row season-details-title">
          <h2 className="season-details-title__text">{currentSeason.title}</h2>
          <NavLink
            className="season-details-title__btn"
            to=".."
            relative="path"
          >
            Все сезоны
          </NavLink>
        </div>
        <div className="season-details-inner__row season-details-images">
          <div className="season-details-images__img">
            <img
              className="season-details-images__img__inner"
              src={currentSeason.seasonImgs[0]}
            ></img>
          </div>
          <div className="season-details-images__img">
            <img
              className="season-details-images__img__inner"
              src={currentSeason.seasonImgs[1]}
            ></img>
          </div>
          <div className="season-details-images__img">
            <img
              className="season-details-images__img__inner"
              src={currentSeason.seasonImgs[2]}
            ></img>
          </div>
          <div className="season-details-images__img">
            <img
              className="season-details-images__img__inner"
              src={currentSeason.seasonImgs[3]}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonDetails;
