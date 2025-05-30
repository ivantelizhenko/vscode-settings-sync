import { useState } from 'react';

function SearchOrder() {
  const [query, setQuery] = useState('');

  return (
    <input
      type="text"
      placeholder="Search order #"
      value={query}
      onChange={e => setQuery(e.target.value)}
    />
  );
}

export default SearchOrder;
