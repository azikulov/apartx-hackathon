import axios from 'axios';
import { API_URL } from '.';

type RefreshToken =
  | {
      message: string;
      token: {
        refresh: string;
        access: string;
      };
    }
  | undefined;

export async function refreshToken(refresh: string): Promise<RefreshToken> {
  try {
    const response = await axios.post(API_URL + 'token/refresh/', { refresh });

    localStorage.setItem('token', JSON.stringify(response.data));

    return response.data;
  } catch (e) {
    localStorage.removeItem('token');
    localStorage.removeItem('isAuth');
  }
}
