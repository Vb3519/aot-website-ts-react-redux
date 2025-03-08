import React from 'react';
import { RiShoppingBasket2Line, RiShoppingBasket2Fill } from 'react-icons/ri';
import { FaRegStar, FaStar } from 'react-icons/fa';

interface ProductCard_info {
  img: string;
  name: string;
  price: string;
}

const ProductCard = (props: ProductCard_info) => {
  const { img, name, price } = props;

  return (
    <li className="store-products-list__card product-card">
      <div className="product-card__img-box">
        <img className="product-card__img-box__img" src={img}></img>
      </div>
      <h2 className="product-card__name">{name}</h2>
      <div className="product-card__more">
        <p className="product-card__more__price">{price}</p>
        <div
          className="product-card__more__add-to-basket"
          title="Добавить в корзину"
        >
          <RiShoppingBasket2Line className="product-card__more__add-to-basket__label" />
        </div>
        <div className="product-card__more__like" title="В избранное">
          <FaRegStar className="product-card__more__like__label" />
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
