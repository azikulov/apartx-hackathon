import axios from 'axios';
import { API_URL } from '.';
import { refreshToken } from './token';

export async function getUserRole(accessToken: string) {
  try {
    const response = await axios.patch(
      API_URL + 'select-role/',
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export async function updateUserRole(
  accessToken: string,
  role: 'Customer' | 'Executor'
) {
  try {
    const response = await axios.patch(
      API_URL + 'select-role/',
      { role },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response;
  } catch (e) {
    refreshToken(JSON.parse(localStorage.getItem('token') as string).refresh);
  }
}
