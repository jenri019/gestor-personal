import { configureStore } from '@reduxjs/toolkit'
import { homeSlice } from './slices/home/homeSlice';
import { genresSlice } from './slices/genres/genresSlice';

export const store = configureStore({
  reducer: {
    genres: genresSlice.reducer,
    home: homeSlice.reducer
  },
})