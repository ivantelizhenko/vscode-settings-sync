import { useAppDispatch, useAppSelector } from '../hooks/storeHooks';
import { removeFromCart, selectItems } from '../store/cartSlice';

export default function CartItems() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectItems);

  function handleRemoveFromCart(id: string) {
    dispatch(removeFromCart(id));
  }

  return (
    <div id="cart">
      {cartItems.length === 0 && <p>No items in cart!</p>}

      {cartItems.length > 0 && (
        <ul id="cart-items">
          {cartItems.map(item => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.title}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleAddToCart(item)}>+</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {/* <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p> */}
    </div>
  );
}
