import { useSearchParams } from 'react-router-dom';
import Select from './Select';

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value) {
    searchParams.set('sort', value);
    setSearchParams(searchParams);
  }

  return <Select options={options} type="white" onChange={handleClick} />;
}

export default SortBy;
