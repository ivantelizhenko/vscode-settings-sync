import { useEffect, useState } from 'react';

export default function Components() {
  function Loader() {
    return <p className="loader">Loading...</p>;
  }

  function ErrorMessage({ message }) {
    return <p className="error">⛔️{message}</p>;
  }

  function NavBar({ children }) {
    return <nav className="nav-bar">{children}</nav>;
  }

  function Logo() {
    return (
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
    );
  }

  function Search({ query, setQuery }) {
    return (
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    );
  }
}
