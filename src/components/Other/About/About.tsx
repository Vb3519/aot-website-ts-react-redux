import React from 'react';

import './About.scss';

import aboutWallaper from '../../../assets/images/background-wallaper_wall.jpg';

import aboutInfoData from '../../../data/aboutInfoData';
import AboutInfoContainer from './AboutInfoContainer';

function About() {
  return (
    <div className="aot-site__about">
      <div className="aot-site__about__wrapper">
        <AboutInfoContainer
          titleName={aboutInfoData[0].titleName}
          titleText={aboutInfoData[0].titleText}
          partOneText={aboutInfoData[0].partOneText}
          partTwoText={aboutInfoData[0].partTwoText}
        />
      </div>

      <div className="aot-site__about__wrapper">
        <div className="aot-site__about__img-container">
          <img
            className="aot-site__about__img-container__img"
            src={aboutWallaper}
          ></img>
        </div>
      </div>

      <div className="aot-site__about__wrapper">
        <AboutInfoContainer
          titleName={aboutInfoData[1].titleName}
          titleText={aboutInfoData[1].titleText}
          partOneText={aboutInfoData[1].partOneText}
          partTwoText={aboutInfoData[1].partTwoText}
        />
      </div>
    </div>
  );
}

export default About;
