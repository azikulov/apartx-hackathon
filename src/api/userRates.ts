import axios from 'axios';
import { API_URL } from '.';
import { refreshToken } from './token';

export async function getUserRates() {
  const token = JSON.parse(sessionStorage.getItem('token') as string);

  try {
    const response = await axios.get(API_URL + 'reviews/', {
      headers: {
        Authorization: `Bearer ${token.access}`,
      },
    });

    return response;
  } catch (e) {
    refreshToken(token.refresh);
  }
}
