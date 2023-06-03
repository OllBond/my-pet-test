import axios from 'axios';

export const usersInstance = axios.create({
  baseURL: 'https://64020c423779a8626263fc94.mockapi.io/users',
});

export const getAllUsers = async () => {
  const { data } = await usersInstance.get('/tweets');
  console.log(data);
  return data;
};

// export const addUser = async data => {
//   const { data: result } = await usersInstance.post('/', data);
//   return result;
// };

// export const deleteContact = async id => {
//   const data = await usersInstance.delete(`/${id}`);
//   return data;
// };
