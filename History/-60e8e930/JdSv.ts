import { AJAX } from './AJAX';

export async function getCountries() {
  try {
    const countries = await AJAX(`${API_URL}/countries`);
    return countries;
  } catch (error) {
    console.error(error);
    return error;
  }
}
