import { useState } from 'react';

import Cart from './Cart.tsx';
import { useAppSelector } from '../hooks/storeHooks.ts';
import { selectItems } from '../store/cartSlice.ts';

export default function Header() {
  const items = useAppSelector(selectItems);

  const [cartIsVisible, setCartIsVisible] = useState(false);

  function handleOpenCartClick() {
    setCartIsVisible(true);
  }

  function handleCloseCartClick() {
    setCartIsVisible(false);
  }

  return (
    <>
      {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Redux</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({items.length})</button>
        </p>
      </header>
    </>
  );
}
