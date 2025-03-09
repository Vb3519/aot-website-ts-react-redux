import { createSlice } from '@reduxjs/toolkit';

// Для слайса состояния:
interface Filter_State {
  charactersFilter: Filter_Info;
}

// Для данных, по которым проводится фильтр:
interface Filter_Info {
  name: string;
  onlyFavourite: boolean;
}

interface Action_Type {
  payload: string | boolean;
  type: string;
}

const initialState: Filter_Info = {
  name: '',
  onlyFavourite: false,
};

const charactersFilterSlice = createSlice({
  name: 'charactersFilter',
  initialState: initialState,
  reducers: {
    setCharacterName: (state, action: Action_Type) => {
      if (typeof action.payload === 'string') {
        return { ...state, name: action.payload };
        // state.name = action.payload // объект состояния не будет мутирован (особенность Rtk и immer)
      }
    },

    setOnlyFavourite: (state, action: Action_Type) => {
      // return { ...state, onlyFavourite: !state.onlyFavourite };

      if (typeof action.payload === 'boolean') {
        return { ...state, onlyFavourite: action.payload };
      }
    },

    resetFilters: () => {
      return { ...initialState };
    },
  },
});

console.log('charactersFilterSlice:', charactersFilterSlice);
console.log('actions:', charactersFilterSlice.actions);

// ДЕЙСТВИЯ:
export const { setCharacterName, setOnlyFavourite, resetFilters } =
  charactersFilterSlice.actions;

// СОСТОЯНИЕ (часть состояния):
export const selectCharacterNameFilter = (state: Filter_State): string =>
  state.charactersFilter.name;

export const selectOnlyFavouriteFilter = (state: Filter_State): boolean =>
  state.charactersFilter.onlyFavourite;

// Экспорт именно .reducer
export default charactersFilterSlice.reducer;
