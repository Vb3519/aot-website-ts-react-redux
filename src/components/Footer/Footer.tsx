import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.scss';
import scoutLabelImage from '../../assets/images/scout-label.png';

const Footer = () => {
  return (
    <div className="aot-site__footer aot-footer">
      <div className="aot-footer__logo">
        <NavLink to=".">
          <img
            className="aot-footer__logo__img"
            src={scoutLabelImage}
            title="На главную"
          ></img>
        </NavLink>
      </div>

      <div className="aot-footer__nav-menu-wrapper footer-nav-menu-wrapper">
        <h5 className="footer-nav-menu-wrapper__title">Меню</h5>
        <ul className="footer-nav-menu-wrapper__nav footer-nav-menu">
          <li className="footer-nav-menu__elem">
            <NavLink to="about">О сериале</NavLink>
          </li>
          <li className="footer-nav-menu__elem">
            <NavLink to="seasons">Сезоны</NavLink>
          </li>
          <li className="footer-nav-menu__elem">
            <NavLink to="characters">Персонажи</NavLink>
          </li>
          <li className="footer-nav-menu__elem">
            <NavLink to="fan-store">Магазин</NavLink>
          </li>
        </ul>
      </div>

      <div className="aot-footer__company footer-company-contacts">
        <h5 className="footer-company-contacts__title">Контакты</h5>
        <ul className="footer-company-contacts__list footer-contacts-list">
          <li className="footer-contacts-list__elem">
            <NavLink to=".">LinkedIn</NavLink>
          </li>
          <li className="footer-contacts-list__elem">
            <NavLink to=".">Instagram</NavLink>
          </li>
          <li className="footer-contacts-list__elem">
            <NavLink to=".">Twitter</NavLink>
          </li>
        </ul>
      </div>

      <div className="aot-footer__author">
        <h5 className="aot-footer__author__title">2025 by Viktor Bordyugov</h5>
      </div>
    </div>
  );
};

export default Footer;
