import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';

import test_img from '../../../assets/images/store/tshirt1_1.png';
import './Basket.scss';

const Basket = () => {
  return (
    <section className="aot-site__cart">
      <h1 className="aot-site__cart__title">Ваши покупки</h1>
      <div className="aot-site__cart__inner cart-inner">
        <ul className="cart-inner__purchases purchases-list">
          <li className="purchases-list__elem purchase-card">
            <div className="purchase-card__img-box">
              <img className="purchase-card__img-box__img" src={test_img}></img>
            </div>
            <h2 className="purchase-card__name">
              Сумка-шоппер аниме "Атака Титанов"
            </h2>
            <div className="purchase-card__actions">
              <div className="purchase-card__actions__quantity quantity-inner">
                <div
                  className="quantity-inner__row quantity-decrement"
                  title="Уменьшить количество"
                >
                  <FaMinus />
                </div>
                <span className="quantity-inner__row quantity-value">1</span>
                <div
                  className="quantity-inner__row quantity-increment"
                  title="Увеличить количество"
                >
                  <FaPlus />
                </div>
              </div>
              <div
                className="purchase-card__actions__delete"
                title="Удалить товар"
              >
                <FaRegTrashCan className="purchase-card__delete__label" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Basket;
