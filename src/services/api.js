import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE || 'https://jsonplaceholder.typicode.com';

const axiosInstance = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

// Note: JSONPlaceholder users endpoint: /users. It does not persist changes.
export async function getUsers() {
  const res = await axiosInstance.get('/users');
  return res.data;
}

export async function getUser(id) {
  const res = await axiosInstance.get(`/users/${id}`);
  return res.data;
}

export async function addUser(payload) {
  const res = await axiosInstance.post('/users', payload);
  return res.data;
}

export async function updateUser(id, payload) {
  const res = await axiosInstance.put(`/users/${id}`, payload);
  return res.data;
}

export async function deleteUser(id) {
  const res = await axiosInstance.delete(`/users/${id}`);
  return res.data;
}

export default axiosInstance;
