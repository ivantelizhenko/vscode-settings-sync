import { useState } from 'react';

function SearchOrder() {
  const [query, setQuery] = useState();

  return <input type="text" placeholder="Search order " />;
}

export default SearchOrder;
