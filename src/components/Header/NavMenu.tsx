import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavMenu_props {
  className?: string;
  toggleOpenMenu?: () => void;
}

const NavMenu = (props: NavMenu_props) => {
  const { className, toggleOpenMenu } = props;

  return (
    <nav
      onClick={toggleOpenMenu}
      className={`aot-header__nav-menu-wrapper nav-menu-wrapper ${className}`}
    >
      <ul className={`nav-menu-wrapper__nav nav-menu ${className}`}>
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
  );
};

export default NavMenu;
