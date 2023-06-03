import { createSlice } from '@reduxjs/toolkit';

import { fetchAllUsers } from './users-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllUsers.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchAllUsers.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items = payload;
      })
      .addCase(fetchAllUsers.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

export default usersSlice;
