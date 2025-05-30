import { UserType } from '../contexts/userContext/AppContextTypes';
import { API_URL } from '../utils/constants';
import { sendJSON } from './AJAX';

export async function addUser(newUser: UserType) {
  sendJSON(`${API_URL}/users`, newUser);
}
