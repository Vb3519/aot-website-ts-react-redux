import React from 'react';

import './MainAbout.scss';

import battleSwordLabel from '../../../assets/images/battle_sword_label.png';

const AboutMain = () => {
  return (
    <div className="aot-site__main__section-wrapper">
      <section className="aot-site__main__about-block main-about-block">
        <div className="main-about-block__title-row">
          <h2 className="main-about-block__title-row__title">О сериале</h2>
          <p>Атака титанов выдающееся аниме, заслужившее множество наград</p>
        </div>

        <div className="main-about-block__content-row main-about-content-row">
          <div className="main-about-content-row__creators">
            <h3 className="main-about-content-row__creators__title">
              Wit Studio, Production I.G
            </h3>
            <h3 className="main-about-content-row__creators__title">MAPPA</h3>
          </div>
          <ul className="main-about-content-row__details about-details">
            <li className="about-details__elem">
              <h4 className="about-details__elem__main-title">89 эпизодов</h4>
              <h5 className="about-details__elem__sub-title">
                сериал насчитывает 4 сезона
              </h5>
              <p className="about-details__elem__descrip">
                Четвертый сезон создатели сериала решили разделить на 3 части.
              </p>
            </li>
            <li className="about-details__elem">
              <h4 className="about-details__elem__main-title">
                Переведен на 20 языков
              </h4>
              <h5 className="about-details__elem__sub-title">
                сериал транслировался в 180 странах по всему миру
              </h5>
              <p className="about-details__elem__descrip">
                Первый сезон был выпущен в 2013 году, а последний — в 2024 году.
              </p>
            </li>
            <li className="about-details__elem">
              <h4 className="about-details__elem__main-title">
                8 миллионов копий
              </h4>
              <h5 className="about-details__elem__sub-title">
                Манги было продано согласно данным за 2014 год
              </h5>
              <p className="about-details__elem__descrip">
                Это сделало ее одной из самых продаваемых в истории.
              </p>
            </li>
            <li className="about-details__elem">
              <h4 className="about-details__elem__main-title">
                Более 60 наград
              </h4>
              <h5 className="about-details__elem__sub-title">
                Данный аниме сериал получил в разных номинациях
              </h5>
              <p className="about-details__elem__descrip">
                Включая премию Crunchyroll Anime Awards за "Лучший анимационный
                сериал".
              </p>
            </li>
          </ul>
          <div className="main-about-content-row__label">
            <img src={battleSwordLabel}></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMain;
