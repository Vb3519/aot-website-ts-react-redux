import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { SlBasket } from 'react-icons/sl';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useSelector } from 'react-redux';

import './Header.scss';
import { selectProducts } from '../../redux/slices/productsSlice';
import scoutLabelImage from '../../assets/images/scout-label.png';
import NavMenu from './NavMenu';

// Типы:
import { Product_Info } from '../../redux/slices/productsSlice';

const Header = () => {
  const [isDevicePortable, setIsDevicePortable] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  // При изменении размера экрана - отображение кнопки гамбургер-меню:
  const handleViewportResize = () => {
    const isPortable: boolean = window.innerWidth <= 650;
    setIsDevicePortable(isPortable);
  };

  window.addEventListener('resize', handleViewportResize);

  useEffect(() => {
    // если не использовать useEffect(), то при начальном рендере (при нужном размере экрана <= 650px, не будет компонента - бургер меню)
    handleViewportResize();
  }, []);

  // Открыть / закрыть меню:
  const toggleOpenMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const products: Product_Info[] = useSelector(selectProducts);

  const filterAddedToCartProducts = (): Product_Info[] => {
    return products.filter((productInfo) => {
      return productInfo.isAddedToCart ? productInfo : '';
    });
  };

  const filteredProducts: Product_Info[] = filterAddedToCartProducts();

  return (
    <div className="aot-site__header aot-header">
      <div className="aot-header__logo" title="На главную">
        <NavLink to=".">
          <img className="aot-header__logo__img" src={scoutLabelImage}></img>
        </NavLink>
      </div>
      {isDevicePortable ? (
        <div
          onClick={toggleOpenMenu}
          className={`aot-header__burger-wrapper burger-wrapper ${
            isMenuOpened ? 'menu-open' : ''
          }`}
          title="Меню"
        >
          <span className="burger-wrapper__label"></span>
          <span className="burger-wrapper__label"></span>
          <span className="burger-wrapper__label"></span>
        </div>
      ) : (
        <NavMenu />
      )}

      {isDevicePortable && isMenuOpened && (
        <NavMenu toggleOpenMenu={toggleOpenMenu} className="opened-nav-menu" />
      )}

      <div className="aot-header__bascet">
        <NavLink className="aot-header__link" to="store-basket">
          {filteredProducts.length > 0 ? (
            <>
              Корзина
              <span className="aot-header__link__bascet-label">
                {filteredProducts.length}
              </span>
              <SlBasket className="aot-header__bascet__logo" />
            </>
          ) : (
            <>
              Корзина <SlBasket className="aot-header__bascet__logo" />
            </>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
