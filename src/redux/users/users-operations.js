import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/services/usersApi';

export const fetchAllUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await api.getAllUsers();
      console.log(data);
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
