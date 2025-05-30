import { useEffect, useRef } from 'react';
import { useKey } from './useKey';

export function NavBar({ children }) {
  return <nav className="nav-bar">{children}</nav>;
}

export function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

export function Search({ query, setQuery }) {
  const inputEl = useRef(null);

  function callback(e) {
    console.log(e);
    if (document.activeElement === inputEl.current) return;
    if (e.key === 'Enter') {
      inputEl.current.focus();
      setQuery('');
    }
  }

  useEffect(() => {
    callback();
    function callback(e) {
      console.log(e);
      if (document.activeElement === inputEl.current) return;
      if (e.key === 'Enter') {
        inputEl.current.focus();
        setQuery('');
      }
    }
  }, [setQuery]);
  useKey('Enter', callback);

  // useEffect(() => {
  //   const el = document.querySelector('.search');
  //   el.focus();
  // }, []);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={e => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}

export function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
