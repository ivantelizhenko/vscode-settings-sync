import { useSearchParams } from 'react-router-dom';
import Select from './Select';

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(label, value) {
    searchParams.set([label], value);
    setSearchParams(searchParams);
  }

  return <Select options={options} type="white" onClick={handleClick} />;
}

export default SortBy;
