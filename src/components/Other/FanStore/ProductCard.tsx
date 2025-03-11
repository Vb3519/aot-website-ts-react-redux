import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiShoppingBasket2Line, RiShoppingBasket2Fill } from 'react-icons/ri';
import { FaRegStar, FaStar } from 'react-icons/fa';

import {
  addToCart,
  toggleFavourite,
} from '../../../redux/slices/productsSlice';

interface ProductCard_info {
  id: string;
  img: string;
  name: string | React.ReactNode;
  price: string;
  isAddedToCart: boolean;
  isFavourite: boolean;
}

const ProductCard = (props: ProductCard_info) => {
  const { id, img, name, price, isAddedToCart, isFavourite } = props;
  const dispatch = useDispatch();

  // Добавить товар в корзину покупок:
  const handleAddToCart = (id: string) => {
    dispatch(addToCart(id));
  };

  // Добавить товар в "избранное":
  const handleToggleFavorite = (id: string) => {
    dispatch(toggleFavourite(id));
  };

  return (
    <li className="store-products-list__card product-card">
      <div className="product-card__img-box">
        <img className="product-card__img-box__img" src={img}></img>
      </div>
      <h2 className="product-card__name">{name}</h2>
      <div className="product-card__more">
        <p className="product-card__more__price">{price}</p>
        <div
          onClick={() => {
            handleAddToCart(id);
          }}
          className="product-card__more__add-to-basket"
          title="Добавить в корзину"
        >
          {isAddedToCart ? (
            <RiShoppingBasket2Fill className="product-card__more__add-to-basket__label" />
          ) : (
            <RiShoppingBasket2Line className="product-card__more__add-to-basket__label" />
          )}
        </div>
        <div
          onClick={() => {
            handleToggleFavorite(id);
          }}
          className="product-card__more__like"
          title="В избранное"
        >
          {isFavourite ? (
            <FaStar className="product-card__more__like__label" />
          ) : (
            <FaRegStar className="product-card__more__like__label" />
          )}
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
