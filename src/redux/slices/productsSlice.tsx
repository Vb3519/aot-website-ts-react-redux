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
  value: number;
}

const initialState: Product_Info[] = storeProductsData;

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    // Отличие названий в двух функциях (add, delete), но функционал одинаков - свичер:
    addToCart: (state, action) => {
      return state.map((productInfo) => {
        return productInfo.id === action.payload
          ? { ...productInfo, isAddedToCart: !productInfo.isAddedToCart }
          : productInfo;
      });
    },

    deleteFromCart: (state, action) => {
      return state.map((productInfo) => {
        return productInfo.id === action.payload
          ? { ...productInfo, isAddedToCart: !productInfo.isAddedToCart }
          : productInfo;
      });
    },

    toggleFavourite: (state, action) => {
      return state.map((productInfo) => {
        return productInfo.id === action.payload
          ? { ...productInfo, isFavourite: !productInfo.isFavourite }
          : productInfo;
      });
    },

    incrementValue: (state, action) => {
      return state.map((productInfo) => {
        return productInfo.isAddedToCart && productInfo.id === action.payload
          ? { ...productInfo, value: productInfo.value + 1 }
          : productInfo;
      });
    },

    decrementValue: (state, action) => {
      return state.map((productInfo) => {
        return productInfo.isAddedToCart && productInfo.id === action.payload
          ? { ...productInfo, value: productInfo.value - 1 }
          : productInfo;
      });
    },
  },
});

// Действия:
export const {
  addToCart,
  deleteFromCart,
  toggleFavourite,
  incrementValue,
  decrementValue,
} = productsSlice.actions;

// Состояние (часть состояния):
export const selectProducts = (state: Products_State): Product_Info[] =>
  state.products;

// Экспортируется именно .reducer:
export default productsSlice.reducer;
