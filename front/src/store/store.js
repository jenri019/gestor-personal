import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from "./slices/counter/counterSlice";
import { homeSlice } from './slices/home/homeSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    home: homeSlice.reducer
  },
})