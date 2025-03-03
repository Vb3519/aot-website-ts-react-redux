import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSquareXTwitter, FaSquareInstagram, FaAward } from 'react-icons/fa6';

import './Main.scss';
import mainPageLabel from '../../assets/images/main_page_label.png';
import battleSwordLabel from '../../assets/images/battle_sword_label.png';

const Main = () => {
  return (
    <div className="aot-site__main">
      <div className="aot-site__main__section-wrapper">
        <section className="aot-site__main__descrip-block main-descrip-block">
          <div className="main-descrip-block__part">
            <div className="main-descrip-block__part__title title-row1">
              Атака
            </div>
            <div className="main-descrip-block__part__title title-row2">
              Титанов
            </div>

            <p className="main-descrip-block__part__description">
              Мир, в котором гигантские титаны угрожают человечеству. Чтобы
              выжить, люди скрываются за высокими стенами. Но когда титаны
              нарушают этот последний рубеж, группа смельчаков отправляется в
              опасное путешествие, чтобы разгадать их тайну и спасти мир. «Атака
              Титанов» — захватывающее приключение, полное борьбы, тайн и
              неожиданных поворотов!
            </p>
          </div>
          <div className="main-descrip-block__part">
            <img src={mainPageLabel}></img>
          </div>
          <div className="main-descrip-block__part">
            <span className="main-descrip-block__part__label">知恵</span>
            <div className="main-descrip-block__part__ratings-and-socials ratings-and-socials">
              <ul className="ratings-and-socials__ratings">
                <li className="ratings-and-socials__ratings__elem ratings-elem">
                  <h3 className="ratings-elem__title">Кинопоиск</h3>
                  <p className="ratings-elem__score">
                    <FaAward className="ratings-elem__score__label" />
                    8.7
                  </p>
                  <p className="ratings-elem__votes">777 718 оценок</p>
                </li>
                <li className="ratings-and-socials__ratings__elem ratings-elem">
                  <h3 className="ratings-elem__title">IMDb</h3>
                  <p className="ratings-elem__score">
                    <FaAward className="ratings-elem__score__label" /> 9.1
                  </p>
                  <p className="ratings-elem__votes">587 248 оценок</p>
                </li>
              </ul>
              <div className="ratings-and-socials__socials">
                <a target="_blank" className="socials-label">
                  <FaSquareXTwitter />
                </a>
                <a target="_blank" className="socials-label">
                  <FaSquareInstagram />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="aot-site__main__seasons-block main-seasons-block">
        <div className="main-seasons-block__title-row">
          <h2 className="main-seasons-block__title-row__title">Сезоны</h2>
          <a className="main-seasons-block__title-row__button">Подробнее</a>
        </div>
        <div className="main-seasons-block__swiper main-seasons-swiper">
          <div className="main-seasons-swiper__inner seasons-swiper-inner">
            <NavLink className="seasons-swiper-inner__elem" to="seasons">
              <img
                className="seasons-swiper-inner__elem__img"
                src="https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/9d6bd914-23a5-4c47-96cb-34eb86e5e6f8/3840x"
                alt="aot season 1 picture"
              ></img>
              <p className="seasons-swiper-inner__elem__title">
                Вторжение титанов
              </p>
            </NavLink>

            <NavLink className="seasons-swiper-inner__elem" to="seasons">
              <img
                className="seasons-swiper-inner__elem__img"
                src="https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/814fd0bd-d0e5-4a75-bf77-fc0aef775ce9/3840x"
                alt="aot season 2 picture"
              ></img>
              <p className="seasons-swiper-inner__elem__title">Тайна стен</p>
            </NavLink>

            <NavLink className="seasons-swiper-inner__elem" to="seasons">
              <img
                className="seasons-swiper-inner__elem__img"
                src="https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/0d87c3c5-fa6d-4d2a-a023-fd6055faca81/3840x"
                alt="aot season 3 picture"
              ></img>
              <p className="seasons-swiper-inner__elem__title">
                Битва за Шиганшину
              </p>
            </NavLink>

            <NavLink className="seasons-swiper-inner__elem" to="seasons">
              <img
                className="seasons-swiper-inner__elem__img"
                src="https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/63f711dc-2ac7-47c7-9303-ac73b61dc333/3840x"
                alt="aot season 4 picture"
              ></img>
              <p className="seasons-swiper-inner__elem__title">
                По ту сторону моря...
              </p>
            </NavLink>
          </div>
        </div>
      </section>

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
                <h4 className="about-details__elem__main-title">87 эпизодов</h4>
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
                  Первый сезон был выпущен в 2013 году, а последний — в 2024
                  году.
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
                  Включая премию Crunchyroll Anime Awards за "Лучший
                  анимационный сериал".
                </p>
              </li>
            </ul>
            <div className="main-about-content-row__label">
              <img src={battleSwordLabel}></img>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;
