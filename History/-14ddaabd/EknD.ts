import { API_URL } from '../utils/constants';
import { AJAX } from './AJAX';

export async function getDepartments() {
  const departments = await AJAX(`${API_URL}/departments`);

  return departments;
}
