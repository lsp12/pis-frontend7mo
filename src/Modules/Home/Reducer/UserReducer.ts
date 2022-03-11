/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { deleteUserController, getUsersController, postUserControllers } from '../Controllers/UserControllers';
import { IFormUser } from '../interface/HomeInterfaceForm';
import { setUser } from '../slice/User.slice';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async ( _, thunkAPI ) => {
    try {
      const response = await getUsersController();
      toast.success( 'Get Users Success' );
      return response;
    } catch ( error:any ) {
      toast.error( error.response.data.message );
      return thunkAPI.rejectWithValue( true );
    }
  },
);

export const postUser = createAsyncThunk(
  'users/postUser',
  async ( user: IFormUser, thunkAPI ) => {
    try {
      const response = await postUserControllers( user );
      thunkAPI.dispatch( getUsers());
      toast.success( 'Post User Success' );
      return response;
    } catch ( error:any ) {
      toast.error( error.response.data.message );
      return thunkAPI.rejectWithValue( true );
    }
  },
);

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async ( user: IFormUser, thunkAPI ) => {
    try {
      const response = await postUserControllers( user );
      thunkAPI.dispatch( getUsers());
      thunkAPI.dispatch( setUser( ));
      return response;
    } catch ( error:any ) {
      toast.error( error.response.data.message );
      return thunkAPI.rejectWithValue( true );
    }
  },
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async ( id: number, thunkAPI ) => {
    try {
      const response = await deleteUserController( id );
      thunkAPI.dispatch( getUsers());
      toast.success( 'Delete User Success' );
      return response;
    } catch ( error:any ) {
      toast.error( error.response.data.message );
      return thunkAPI.rejectWithValue( true );
    }
  },
);
