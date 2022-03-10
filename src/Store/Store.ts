import { configureStore } from '@reduxjs/toolkit';
import HomeSlice from '../Modules/Home/slice/Home.slice';

export const Store = configureStore({
  reducer: {
    home: HomeSlice,
  },
});

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
