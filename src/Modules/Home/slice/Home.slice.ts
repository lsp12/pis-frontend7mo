import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormUser } from '../interface/HomeInterfaceForm';

interface HomeInitialState {
  loading: boolean;
  user?:IFormUser;
  users: IFormUser[];
  drawer: boolean;
}

const initialState: HomeInitialState = {
  loading: false,
  users: [],
  drawer: false,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setId: ( state, action:PayloadAction<Number> ) => {
      state.user = state.users.find(( user:IFormUser ) => user.id === action.payload );
    },
    drawer: ( state, action:PayloadAction<boolean> ) => {
      state.drawer = action.payload;
    },

  },
  extraReducers: {},
});

export const { setId, drawer } = homeSlice.actions;
export default homeSlice.reducer;
