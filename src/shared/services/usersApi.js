import axios from 'axios';

export const usersInstance = axios.create({
  baseURL: 'https://64020c423779a8626263fc94.mockapi.io/users',
});

export const getAllUsers = async () => {
  const { data } = await usersInstance.get('/');
  return data;
};

export const updateUserById = async ({ id, followers }) => {
  const { data } = await usersInstance.put(`/${id}`, followers);
  return data;
};
