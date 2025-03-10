import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './FanStore.scss';
import ProductCard from './ProductCard';
import EmptyCard from '../Characters/EmptyCard';
import { selectProducts } from '../../../redux/slices/productsSlice';
import {
  setProductName,
  setOnlyFavourite,
  setMinPriceValue,
  setMaxPriceValue,
  resetProductsFilters,
  selectProductNameFilter,
  selectOnlyFavouriteFilter,
  selectMinPriceFilter,
  selectMaxPriceFilter,
} from '../../../redux/slices/productsFilterSlice';

// Типы:
import { Product_Info } from '../../../redux/slices/productsSlice';

const FanStore = () => {
  // Список товаров из Redux-слайса:
  const storeProductsData: Product_Info[] = useSelector(selectProducts);

  const dispatch = useDispatch();

  // ФИЛЬТРЫ:
  const productNameFilter: string = useSelector(selectProductNameFilter);
  const onlyFavouriteFilter: boolean = useSelector(selectOnlyFavouriteFilter);
  const minPriceValueFilter: number = useSelector(selectMinPriceFilter);
  const maxPriceValueFilter: number = useSelector(selectMaxPriceFilter);

  // ДЕЙСТВИЯ:
  // Фильтр по названию товара:
  const handleProductNameFilterChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { target } = event;

    dispatch(setProductName(target.value));
  };

  // Фильтр только "избранное":
  const handleOnlyFavouriteFilterChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const target = event.target;

    dispatch(setOnlyFavourite(target.checked));
  };

  // Фильтр по минимальной цене:
  const handleMinPrivceValueFilterChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { target } = event;

    dispatch(setMinPriceValue(target.value));
  };

  // Фильтр по максимальной цене:
  const handleMaxPriceValueFilterChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { target } = event;

    dispatch(setMaxPriceValue(target.value));
  };

  // Ресет фильтров:
  const handleResetProductFilters = () => {
    dispatch(resetProductsFilters());
  };

  const filterStoreProductsData = () => {
    return storeProductsData.filter((productInfo) => {
      const matchesName: boolean = productInfo.name
        .toLowerCase()
        .includes(productNameFilter.toLowerCase().trim());

      const matchesFavourite: boolean = onlyFavouriteFilter
        ? productInfo.isFavourite
        : true;

      // productInfo.price это срока, например: '1850 Руб.'
      const matchesPriceFilter =
        Number(productInfo.price.slice(0, productInfo.price.indexOf(' '))) >=
          minPriceValueFilter &&
        Number(productInfo.price.slice(0, productInfo.price.indexOf(' '))) <=
          maxPriceValueFilter;

      return matchesName && matchesFavourite && matchesPriceFilter;
    });
  };

  const hightlightProductNameFilter = (
    productText: string,
    filterText: string
  ) => {
    const regex = new RegExp(`(${filterText})`, 'gi');

    return productText.split(regex).map((substring, i) => {
      return substring.toLowerCase() === filterText.toLowerCase().trim() ? (
        <span key={i} className="highlight-product-name">
          {substring}
        </span>
      ) : (
        substring
      );
    });
  };

  const filteredStoreProductsData: Product_Info[] = filterStoreProductsData();

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
            onChange={handleProductNameFilterChange}
            value={productNameFilter}
          />
          <label className="store-inner__filter__favourite-products favourite-products">
            <input
              onChange={handleOnlyFavouriteFilterChange}
              className="favourite-products__checkbox"
              type="checkbox"
              checked={onlyFavouriteFilter}
            />
            Избранное
          </label>

          <div className="store-inner__filter__price store-price">
            <label className="store-price__range-label">
              Выберите диапазон цен:
            </label>
            <div className="store-price__price-range price-range-container">
              <input
                onChange={handleMinPrivceValueFilterChange}
                className="price-range-container__price-filter min-price-filter"
                value={minPriceValueFilter}
                type="range"
                min="0"
                max="2500"
                step="100"
              />
              <span className="price-range-container__price-value min-price-value">
                {minPriceValueFilter}
              </span>
            </div>
            <div className="store-price__price-range price-range-container">
              <input
                onChange={handleMaxPriceValueFilterChange}
                className="price-range-container__price-filter max-price-filter"
                value={maxPriceValueFilter}
                type="range"
                min="0"
                max="2500"
                step="100"
              />
              <span className="price-range-container__price-value max-price-value">
                {maxPriceValueFilter}
              </span>
            </div>
          </div>
          <button
            onClick={handleResetProductFilters}
            className="store-inner__filter__reset-btn"
            type="button"
          >
            Сбросить фильтры
          </button>
        </form>
        <div className="store-inner__products">
          <ul className="store-inner__products__list store-products-list">
            {filteredStoreProductsData.length > 0 ? (
              filteredStoreProductsData.map((product, index) => {
                return (
                  <ProductCard
                    id={product.id}
                    key={index}
                    img={product.img}
                    name={hightlightProductNameFilter(
                      product.name,
                      productNameFilter
                    )}
                    price={product.price}
                    isAddedToCart={product.isAddedToCart}
                    isFavourite={product.isFavourite}
                  />
                );
              })
            ) : (
              <EmptyCard
                title="Вы ввели некорректное наименование товара, либо в данный момент у Вас нет
          товаров в разделе 'избранное'."
                description="Вы можете добавить любой товар в корзину или в избранное, нажав на соответствующий значок в нижней части карточки товара."
              />
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FanStore;
