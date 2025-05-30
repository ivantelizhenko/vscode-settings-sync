import { API_URL } from '../utils/constants';
import { AJAX } from './AJAX';

export async function getUsers() {
  const users = await AJAX(`${API_URL}/users`);

  return users;
}
