import React from 'react';

interface AboutInfoData {
  titleName: string;
  titleText: string;
  partOneText: string;
  partTwoText: string;
}

const AboutInfoContainer = (props: AboutInfoData) => {
  const { titleName, titleText, partOneText, partTwoText } = props;

  return (
    <div className="aot-site__about__info about-info-container">
      <div className="about-info-container__row about-title-row">
        <h2 className="about-title-row__title-text">{titleName}</h2>
        <p className="about-title-row__descrip-text">{titleText}</p>
      </div>
      <div className="about-info-container__row about-descip-row">
        <p className="about-descip-row__text">{partOneText}</p>
        <p className="about-descip-row__text">{partTwoText}</p>
      </div>
    </div>
  );
};

export default AboutInfoContainer;
