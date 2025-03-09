import { configureStore } from '@reduxjs/toolkit';
import characterReducer from '../redux/slices/charactersSlice';
import filterReducer from '../redux/slices/charactersFilterSlice';

const store = configureStore({
  reducer: {
    characters: characterReducer,
    charactersFilter: filterReducer,
  },
});

console.log('store:', store);

export default store;
