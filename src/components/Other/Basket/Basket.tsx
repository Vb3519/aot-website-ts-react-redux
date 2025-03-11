import React from 'react';
import { useSelector } from 'react-redux';

import { selectProducts } from '../../../redux/slices/productsSlice';
import EmptyCard from '../Characters/EmptyCard';
import PurchaseCard from './PurchaseCard';
import './Basket.scss';

// Типы:
import { Product_Info } from '../../../redux/slices/productsSlice';

const Basket = () => {
  const products: Product_Info[] = useSelector(selectProducts);

  const filterAddedToCartProducts = (): Product_Info[] => {
    return products.filter((productInfo) => {
      return productInfo.isAddedToCart ? productInfo : '';
    });
  };

  const filteredProducts: Product_Info[] = filterAddedToCartProducts();

  return (
    <section className="aot-site__cart">
      <h1 className="aot-site__cart__title">Ваши покупки</h1>
      <div className="aot-site__cart__inner cart-inner">
        <ul className="cart-inner__purchases purchases-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => {
              return (
                <PurchaseCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  img={product.img}
                  value={product.value}
                />
              );
            })
          ) : (
            <EmptyCard
              title="В данный момент Ваша корзина покупок пуста"
              description="Вы можете перейти в магазин, чтобы добавить товары."
            />
          )}
        </ul>
      </div>
    </section>
  );
};

export default Basket;
