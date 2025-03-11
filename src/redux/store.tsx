import { configureStore } from '@reduxjs/toolkit';
import characterReducer from '../redux/slices/charactersSlice';
import charactersFilterReducer from '../redux/slices/charactersFilterSlice';
import productsReducer from '../redux/slices/productsSlice';
import productsFilterReducer from '../redux/slices/productsFilterSlice';

const store = configureStore({
  reducer: {
    characters: characterReducer,
    charactersFilter: charactersFilterReducer,

    products: productsReducer,
    productsFilter: productsFilterReducer,
  },
});

export default store;
