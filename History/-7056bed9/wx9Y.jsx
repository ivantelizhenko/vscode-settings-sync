import { useSearchParams } from 'react-router-dom';

export function useUrlPosition() {
  const [seachParams] = useSearchParams();

  const lat = seachParams.get('lat');
  const lng = seachParams.get('lng');

  if (lat && lng) return [lat, lng];
  return [40, 0];
}
