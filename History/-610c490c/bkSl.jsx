import { useSearchParams } from 'react-router-dom';
import Select from './Select';

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSort = searchParams.get('sortBy') || 'MaxCapacity-asc';

  function handleChange(e) {
    searchParams.set('sortBy', e.target.value);
    setSearchParams(searchParams);
  }

  return <Select options={options} type="white" onChange={handleChange} />;
}

export default SortBy;
