import { createSlice } from '@reduxjs/toolkit';
import charactersData from '../../data/charactersData';

// Для слайса состояния:
interface Characters_State {
  characters: Characters_Info[];
}

// Для данных по персонажам:
export interface Characters_Info {
  id: string;
  name: any;
  img: string;
  isFavourite: boolean;
  description: string;
}

interface Action_Type {
  payload: string;
  type: string;
}

const initialState: Characters_Info[] = charactersData;

const charactersSlice = createSlice({
  name: 'characters',
  initialState: initialState,
  reducers: {
    toggleFavourite: (state, action: Action_Type) => {
      return state.map((characterInfo) => {
        return characterInfo.id === action.payload
          ? { ...characterInfo, isFavourite: !characterInfo.isFavourite }
          : characterInfo;
      });
    },
  },
});

// ДЕЙСТВИЯ:
export const { toggleFavourite } = charactersSlice.actions;
// const toggleFavourite = charactersSlice.actions.toggleFavourite;

// СОСТОЯНИЕ (часть состояния):
export const selectCharacters = (state: Characters_State): Characters_Info[] =>
  state.characters;

// Экспортируется именно .reducer
export default charactersSlice.reducer;
