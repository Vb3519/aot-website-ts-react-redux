import React from 'react';

import { FaSquareXTwitter, FaSquareInstagram, FaAward } from 'react-icons/fa6';

import './MainDescription.scss';

import mainPageLabel from '../../../assets/images/main_page_label.png';
import mainPageLabelTwo from '../../../assets/images/main_page_label2.png';

const DescriptionMain = () => {
  return (
    <div className="aot-site__main__section-wrapper">
      <section className="aot-site__main__descrip-block main-descrip-block">
        <div className="main-descrip-block__part part-one">
          <img
            className="main-descrip-block__part__img-one"
            src={mainPageLabelTwo}
          ></img>
          <div className="main-descrip-block__part__title title-row1">
            Атака
          </div>
          <div className="main-descrip-block__part__title title-row2">
            Титанов
          </div>

          <div className="elem-background-style-wrapper">
            <p className="main-descrip-block__part__description">
              В мире, где гигантские титаны угрожают человечеству, чтобы выжить,
              люди скрываются за непреодолимыми стенами. Но когда эта преграда
              рушится, отряд отважных героев отправляется в опасное путешествие.
              Их цель — раскрыть тайну этих чудовищ и найти способ спасти мир,
              стоящий на грани уничтожения. «Атака титанов» — это эпическая и
              жестокая история, полная сражений, тайн и непредсказуемых сюжетных
              поворотов.
            </p>
          </div>
        </div>
        <div className="main-descrip-block__part part-two">
          <img
            className="main-descrip-block__part__img-two"
            src={mainPageLabel}
          ></img>
        </div>
        <div className="main-descrip-block__part part-three">
          <div className="main-descrip-block__part__ratings-and-socials ratings-and-socials">
            <ul className="ratings-and-socials__ratings">
              <li className="ratings-and-socials__ratings__elem ratings-elem">
                <div className="ratings-elem__inner">
                  <h3 className="ratings-elem__inner__title">Кинопоиск</h3>
                  <p className="ratings-elem__inner__score">
                    <FaAward className="ratings-elem__inner__score__label" />
                    8.7
                  </p>
                  <p className="ratings-elem__votes">777 718 оценок</p>
                </div>
              </li>
              <li className="ratings-and-socials__ratings__elem ratings-elem">
                <div className="ratings-elem__inner">
                  <h3 className="ratings-elem__inner__title">IMDb</h3>
                  <p className="ratings-elem__inner__score">
                    <FaAward className="ratings-elem__inner__score__label" />{' '}
                    9.1
                  </p>
                  <p className="ratings-elem__votes">587 248 оценок</p>
                </div>
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
          <span className="main-descrip-block__part__label">知恵</span>
        </div>
      </section>
    </div>
  );
};

export default DescriptionMain;
