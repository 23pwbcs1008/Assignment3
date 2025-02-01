import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import "../style.css";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <div className="cart">
        <h2>Cart</h2>
        {cart.map((item) => (
          <div key={item.cartItemId} className="cart-item">
            <h3>{item.name}</h3>
            <p>Rs {item.price}</p>
            <input
              type="number"
              value={item.quantity}
              min="0" // Prevent negative numbers or zero
              onChange={(e) => {
                const newQuantity = Math.max(0, e.target.value); // Ensure quantity is at least 1
                updateQuantity(item.cartItemId, newQuantity);
              }}
            />
            <button onClick={() => removeFromCart(item.cartItemId)}>
              Remove
            </button>
          </div>
        ))}
        <div className="cart-total">Total: Rs {totalPrice.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Cart;
