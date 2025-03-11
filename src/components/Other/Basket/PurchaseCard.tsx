import React from 'react';
import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteFromCart,
  incrementValue,
  decrementValue,
} from '../../../redux/slices/productsSlice';

interface PurchaseCard_Info {
  id: string;
  name: string;
  img: string;
  value: number;
}

const PurchaseCard = (props: PurchaseCard_Info) => {
  const { id, name, img, value } = props;

  const dispatch = useDispatch();

  const handleDecrementProductCounter = (id: string) => {
    if (value === 1) return;
    dispatch(decrementValue(id));
  };

  const handleIncrementProductCounter = (id: string) => {
    if (value < 5) {
      dispatch(incrementValue(id));
    }
  };

  const handleRemoveProductFromCart = (id: string) => {
    dispatch(deleteFromCart(id));
  };

  return (
    <li className="purchases-list__elem purchase-card">
      <div className="purchase-card__img-box">
        <img className="purchase-card__img-box__img" src={img}></img>
      </div>
      <h2 className="purchase-card__name">{name}</h2>
      <div className="purchase-card__actions">
        <div className="purchase-card__actions__quantity quantity-inner">
          <div
            onClick={() => {
              handleDecrementProductCounter(id);
            }}
            className="quantity-inner__row quantity-decrement"
            title="Уменьшить количество"
          >
            <FaMinus />
          </div>
          <span className="quantity-inner__row quantity-value">{value}</span>
          <div
            onClick={() => {
              handleIncrementProductCounter(id);
            }}
            className="quantity-inner__row quantity-increment"
            title="Увеличить количество"
          >
            <FaPlus />
          </div>
        </div>
        <div
          onClick={() => {
            handleRemoveProductFromCart(id);
          }}
          className="purchase-card__actions__delete"
          title="Удалить товар"
        >
          <FaRegTrashCan className="purchase-card__delete__label" />
        </div>
      </div>
    </li>
  );
};

export default PurchaseCard;
