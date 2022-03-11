import { configureStore } from '@reduxjs/toolkit';
import HomeSlice from '../Modules/Home/slice/User.slice';

export const Store = configureStore({
  reducer: {
    user: HomeSlice,
  },
});

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
