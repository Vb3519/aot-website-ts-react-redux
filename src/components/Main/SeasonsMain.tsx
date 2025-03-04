import React from 'react';
import { NavLink } from 'react-router-dom';

import './SeasonsMain.scss';

const SeasonsMain = () => {
  return (
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
  );
};

export default SeasonsMain;
