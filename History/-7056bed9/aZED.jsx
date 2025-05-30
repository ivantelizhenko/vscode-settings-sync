import { useSearchParams } from 'react-router-dom';

export function useUrlPosition() {
  const [seachParams] = useSearchParams();
  if (!seachParams) return [1, 1];
  const lat = seachParams.get('lat');
  const lng = seachParams.get('lng');
  return [lat, lng];
}
