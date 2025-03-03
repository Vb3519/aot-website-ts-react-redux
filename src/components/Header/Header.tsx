import React from 'react';
import { NavLink } from 'react-router-dom';
import { SlBasket } from 'react-icons/sl';

import './Header.scss';
import scoutLabelImage from '../../assets/images/scout-label.png';

const Header = () => {
  return (
    <div className="aot-site__header aot-header">
      <div className="aot-header__logo">
        <NavLink to=".">
          <img className="aot-header__logo__img" src={scoutLabelImage}></img>
        </NavLink>
      </div>
      <nav className="aot-header__nav-menu-wrapper nav-menu-wrapper">
        <ul className="nav-menu-wrapper__nav nav-menu">
          <li className="nav-menu__elem">
            <NavLink to="about">О сериале</NavLink>
          </li>
          <li className="nav-menu__elem">
            <NavLink to="seasons">Сезоны</NavLink>
          </li>
          <li className="nav-menu__elem">
            <NavLink to="characters">Персонажи</NavLink>
          </li>
          <li className="nav-menu__elem">
            <NavLink to="fan-store">Магазин</NavLink>
          </li>
        </ul>
      </nav>
      <div className="aot-header__bascet">
        <NavLink className="aot-header__link" to="store-basket">
          Корзина <SlBasket className="aot-header__bascet__logo" />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
