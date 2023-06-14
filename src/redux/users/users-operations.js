import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/services/usersApi';

export const fetchAllUsers = createAsyncThunk(
  'users/fetchAll',
  async (page, thunkAPI) => {
    try {
      const data = await api.getAllUsers(page);
      console.log('2', data);
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
export const fetchUpdateUserById = createAsyncThunk(
  'users/fetchUpdate',
  async ({ id, followers }, thunkAPI) => {
    try {
      const data = await api.updateUserById({ id, followers });
      console.log(data);
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
