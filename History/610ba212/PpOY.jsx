import {
  createContext,
  useState,
  useEffect,
  useContext,
  useReducer,
} from 'react';

const BASE_URL = 'http://localhost:9000';

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'loading':
      return { ...state, isLoading: ' true' };
    case 'cities/loaded':
      return { ...state, isLoading: false, cities: action.payload };
    case 'cities/created':
      return { ...state, isLoading: false, cities: action.payload };
    case 'cities/deleted':
      return { ...state, isLoading: false, cities: action.payload };
    case 'rejected':
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error('Unknown action type');
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        dispatch({ type: 'loading' });
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        dispatch({ type: 'cities/loaded', payload: data });
      } catch {
        dispatch({
          type: 'rekected',
          payload: 'There was an error loading data...',
        });
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      dispatch({ type: 'loading' });
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      dispatch({
        type: 'rekected',
        payload: 'There was an error loading data...',
      });
    }
  }

  async function createCity(newCity) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities`, {
        method: 'POST',
        body: JSON.stringify(newCity),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setCities(cities => [...cities, data]);
    } catch {
      console.error('There was an error creating city');
    } finally {
      setIsLoading(false);
    }
    return;
  }

  async function deleteCity(id) {
    try {
      setIsLoading(true);
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: 'DELETE',
      });

      setCities(cities => cities.filter(city => city.id !== id));
    } catch {
      console.error('There was an error deleting city.');
    } finally {
      setIsLoading(false);
    }
    return;
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);

  if (context === undefined)
    throw new Error('PostContext was used outside of the PostProvider');

  return context;
}

export { CitiesProvider, useCities };
