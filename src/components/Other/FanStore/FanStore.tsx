import React from 'react';

import './FanStore.scss';
import storeProductsData from '../../../data/storeProductsData';
import ProductCard from './ProductCard';

const FanStore = () => {
  return (
    <section className="aot-site__store">
      <h1 className="aot-site__store__title">Магазин</h1>
      <div className="aot-site__store__inner store-inner">
        <form className="store-inner__filter">
          <input
            className="store-inner__filter__product-name"
            type="text"
            placeholder="Наименование товара..."
            maxLength={50}
          />
          <label className="store-inner__filter__favourite-products favourite-products">
            <input className="favourite-products__checkbox" type="checkbox" />
            Избранное
          </label>

          <div className="store-inner__filter__price store-price">
            <label className="store-price__range-label">
              Выберите диапазон цен:
            </label>
            <div className="store-price__price-range price-range-container">
              <input
                className="price-range-container__price-filter min-price-filter"
                type="range"
                min="0"
                max="5000"
                step="100"
                value="0"
              />
              <span className="price-range-container__price-value min-price-value">
                0
              </span>
            </div>
            <div className="store-price__price-range price-range-container">
              <input
                className="price-range-container__price-filter max-price-filter"
                type="range"
                min="0"
                max="5000"
                step="100"
                value="5000"
              />
              <span className="price-range-container__price-value max-price-value">
                5000
              </span>
            </div>
          </div>
          <button className="store-inner__filter__reset-btn" type="button">
            Сбросить фильтры
          </button>
        </form>
        <div className="store-inner__products">
          <ul className="store-inner__products__list store-products-list">
            {storeProductsData.map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  img={product.img}
                  name={product.name}
                  price={product.price}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FanStore;

{
  /* <li className="store-products-list__card product-card">
  <img className="product-card__img" src={product_img_example}></img>
  <h2 className="product-card__name">Product Name Example</h2>
  <div className="product-card__more">
    <p className="product-card__more__price">5 000 Руб.</p>
    <div
      className="product-card__more__add-to-basket"
      title="Добавить в корзину"
    >
      <RiShoppingBasket2Line className="product-card__more__add-to-basket__label" />
    </div>
    <div className="product-card__more__like" title="В избранное">
      <FaRegStar />
    </div>
  </div>
</li>; */
}
