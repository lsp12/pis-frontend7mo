import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000',
  /* timeout: 1000, */
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
