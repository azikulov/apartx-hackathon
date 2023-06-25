import axios from 'axios';
import { API_URL } from '.';
import { refreshToken } from './token';

export async function getUserData() {
  if (sessionStorage) {
    const token = JSON.parse(sessionStorage.getItem('token') as string);

    try {
      const response = await axios.get(API_URL + 'profile/', {
        headers: {
          Authorization: `Bearer ${token.access}`,
        },
      });

      return response;
    } catch (e) {
      refreshToken(token.refresh);
    }
  }
}
