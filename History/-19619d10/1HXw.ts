import { API_URL } from '../utils/constants';
import { AJAX } from './AJAX';

export async function getCountries() {
  const countries = await AJAX(`${API_URL}/countries`);

  return countries;
}
