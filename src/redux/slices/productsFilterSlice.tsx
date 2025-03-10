import { createSlice } from '@reduxjs/toolkit';

interface ProductsFilter_State {
  productsFilter: ProductsFilter_Info;
}

interface ProductsFilter_Info {
  productName: string;
  onlyFavourite: boolean;
  minPriceValue: number;
  maxPriceValue: number;
}

const initialState: ProductsFilter_Info = {
  productName: '',
  onlyFavourite: false,
  minPriceValue: 0,
  maxPriceValue: 2500,
};

const productsFilterSlice = createSlice({
  name: 'productsFilter',
  initialState: initialState,
  reducers: {
    setProductName: (state, action) => {
      return { ...state, productName: action.payload };
    },

    setOnlyFavourite: (state, action) => {
      return { ...state, onlyFavourite: action.payload };
      // state.onlyFavourite = action.payload
    },

    setMinPriceValue: (state, action) => {
      return { ...state, minPriceValue: action.payload };
    },

    setMaxPriceValue: (state, action) => {
      return { ...state, maxPriceValue: action.payload };
    },

    resetProductsFilters: () => {
      return { ...initialState };
    },
  },
});

// ДЕЙСТВИЯ:
export const {
  setProductName,
  setOnlyFavourite,
  setMinPriceValue,
  setMaxPriceValue,
  resetProductsFilters,
} = productsFilterSlice.actions;

// СОСТОЯНИЕ (часть):
export const selectProductNameFilter = (state: ProductsFilter_State): string =>
  state.productsFilter.productName; // фильтр по названию товара

export const selectOnlyFavouriteFilter = (
  state: ProductsFilter_State
): boolean => state.productsFilter.onlyFavourite; // по "избранному"

export const selectMinPriceFilter = (state: ProductsFilter_State): number =>
  state.productsFilter.minPriceValue; // по минимальной цене

export const selectMaxPriceFilter = (state: ProductsFilter_State) =>
  state.productsFilter.maxPriceValue; // по максимальной цене

export default productsFilterSlice.reducer;
