import { useEffect, useState } from 'react';

export default function Loader() {
  return <p className="loader">Loading...</p>;
}

export default function ErrorMessage({ message }) {
  return <p className="error">⛔️{message}</p>;
}

export default function NavBar({ children }) {
  return <nav className="nav-bar">{children}</nav>;
}

export default function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

 