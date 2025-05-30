import { UserType } from '../contexts/userContext/AppContextTypes';
import { API_URL } from '../utils/constants';

async function addUser(newUser: UserType) {
  sendJSON(`${API_URL}/users`, newUser);
}
