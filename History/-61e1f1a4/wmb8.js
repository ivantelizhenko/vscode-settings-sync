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

  function NumResults({ movies }) {
    return (
      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    );
  }

  function Main({ children }) {
    return <main className="main">{children}</main>;
  }

  function Box({ children }) {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <div className="box">
        <Button isOpen={isOpen} setIsOpen={setIsOpen} />
        {isOpen && children}
      </div>
    );
  }

  function Button({ isOpen, setIsOpen }) {
    return (
      <button className="btn-toggle" onClick={() => setIsOpen(open => !open)}>
        {isOpen ? '–' : '+'}
      </button>
    );
  }
}

export Button 