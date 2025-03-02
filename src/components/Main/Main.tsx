import React from 'react';
import {
  FaXTwitter,
  FaSquareXTwitter,
  FaSquareInstagram,
  FaAward,
} from 'react-icons/fa6';

import './Main.scss';

const Main = () => {
  return (
    <div className="aot-site__main">
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
          <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/d24da5c2-c719-483e-9d54-9ab5864da893/3840x"></img>
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

      <section className="aot-site__main__seaons-block main-seasons-block">
        <div className="main-seasons-block__title-row">
          <h2 className="main-seasons-block__title-row__title">Сезоны</h2>
          <a className="main-seasons-block__title-row__button">Подробнее</a>
        </div>
        <div className="main-seasons-block__swiper main-seasons-swiper">
          <div className="main-seasons-swiper__inner seasons-swiper-inner">
            <div className="seasons-swiper-inner__elem">
              <img
                className="seasons-swiper-inner__elem__img"
                src="https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/9d6bd914-23a5-4c47-96cb-34eb86e5e6f8/3840x"
                alt="aot season 1 picture"
              ></img>
              <p className="seasons-swiper-inner__elem__title">
                Вторжение титанов
              </p>
            </div>
            <div className="seasons-swiper-inner__elem">
              <img
                className="seasons-swiper-inner__elem__img"
                src="https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/814fd0bd-d0e5-4a75-bf77-fc0aef775ce9/3840x"
                alt="aot season 2 picture"
              ></img>
              <p className="seasons-swiper-inner__elem__title">Тайна стен</p>
            </div>
            <div className="seasons-swiper-inner__elem">
              <img
                className="seasons-swiper-inner__elem__img"
                src="https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/0d87c3c5-fa6d-4d2a-a023-fd6055faca81/3840x"
                alt="aot season 3 picture"
              ></img>
              <p className="seasons-swiper-inner__elem__title">
                Битва за Шиганшину
              </p>
            </div>
            <div className="seasons-swiper-inner__elem">
              <img
                className="seasons-swiper-inner__elem__img"
                src="https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/63f711dc-2ac7-47c7-9303-ac73b61dc333/3840x"
                alt="aot season 4 picture"
              ></img>
              <p className="seasons-swiper-inner__elem__title">
                По ту сторону моря...
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
