import { createSlice } from '@reduxjs/toolkit';

import storeProductsData from '../../data/storeProductsData';

interface Products_State {
  products: Product_Info[];
}

export interface Product_Info {
  id: string;
  img: string;
  name: string;
  price: string;
  isAddedToCart: boolean;
  isFavourite: boolean;
}

const initialState: Product_Info[] = storeProductsData;

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      return state.map((product) => {
        return product.id === action.payload
          ? { ...product, isAddedToCart: !product.isAddedToCart }
          : product;
      });
    },

    toggleFavourite: (state, action) => {
      return state.map((product) => {
        return product.id === action.payload
          ? { ...product, isFavourite: !product.isFavourite }
          : product;
      });
    },
  },
});

// Действия:
export const { addToCart, toggleFavourite } = productsSlice.actions;

// Состояние (часть состояния):
export const selectProducts = (state: Products_State): Product_Info[] =>
  state.products;

// Экспортируется именно .reducer:
export default productsSlice.reducer;
