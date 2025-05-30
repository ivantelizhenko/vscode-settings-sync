import { useReducer } from 'react';

async function getCountries() {
  const [appState, dispatch] = useReducer(usersReducer, initialState);

  dispatch({ type: 'loading' });
  try {
    const countries = await AJAX(`${API_URL}/countries`);
    dispatch({ type: 'countries/loaded', payload: countries });
  } catch (error) {
    console.error(error);
    dispatch({
      type: 'rejected',
      payload: 'The problem with a fetching countries from server',
    });
  }
}
