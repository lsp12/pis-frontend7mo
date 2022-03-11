import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormUser } from '../interface/HomeInterfaceForm';
import { deleteUser, getUsers, postUser } from '../Reducer/UserReducer';

interface HomeInitialState {
  loading: boolean;
  user?:IFormUser;
  users: IFormUser[];
  dialog: boolean;
}

const initialState: HomeInitialState = {
  loading: false,
  users: [],
  dialog: false,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setId: ( state, action:PayloadAction<Number> ) => {
      state.user = state.users.find(( user:IFormUser ) => user.id === action.payload );
    },
    setDialog: ( state, action:PayloadAction<boolean> ) => {
      state.dialog = action.payload;
    },
    setUser: ( state ) => {
      state.user = undefined;
    },

  },
  extraReducers: ( builder ) => {
    builder
      .addCase( getUsers.pending, ( state ) => {
        state.loading = true;
      })
      .addCase( getUsers.fulfilled, ( state, action ) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase( getUsers.rejected, ( state ) => {
        state.loading = false;
      });
    builder
      .addCase( postUser.pending, ( state ) => {
        state.loading = true;
      })
      .addCase( postUser.fulfilled, ( state, action ) => {
        state.loading = false;
        state.user = action.payload;
        state.user = undefined;
      })
      .addCase( postUser.rejected, ( state ) => {
        state.loading = false;
      });
    builder
      .addCase( deleteUser.pending, ( state ) => {
        state.loading = true;
      })
      .addCase( deleteUser.fulfilled, ( state, action ) => {
        state.loading = false;
        state.users = state.users.filter(( user:IFormUser ) => user.id !== action.payload );
      })
      .addCase( deleteUser.rejected, ( state ) => {
        state.loading = false;
      });
  },
});

export const { setId, setDialog, setUser } = homeSlice.actions;
export default homeSlice.reducer;
