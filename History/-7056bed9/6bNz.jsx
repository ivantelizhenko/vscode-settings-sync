import { useSearchParams } from 'react-router-dom';

function useUrlPosition() {
  const [seachParams] = useSearchParams();

  const mapLat = seachParams.get('lat');
  const mapLng = seachParams.get('lng');

  return [mapLat, mapLng];
}
