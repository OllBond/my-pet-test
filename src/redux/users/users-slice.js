import { createSlice } from '@reduxjs/toolkit';

import { fetchAllUsers, fetchUpdateUserById } from './users-operations';

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
      })
      .addCase(fetchUpdateUserById.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchUpdateUserById.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        const index = store.items.findIndex(item => item.id === payload);
        console.log(index);
        if (index !== -1) {
          store.items[index] = {
            ...store.items[index],
            ...payload,
          };
        }
        store.error = null;
      })
      .addCase(fetchUpdateUserById.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

export default usersSlice.reducer;
