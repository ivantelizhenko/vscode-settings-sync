import { API_URL } from '../utils/constants';
import { AJAX } from './AJAX';

export async function getStatuses() {
  const statuses = await AJAX(`${API_URL}/statuses`);

  return statuses;
}
