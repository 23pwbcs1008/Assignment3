import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const newItem = {
      ...product,
      cartItemId: Math.random().toString(36).substr(2, 9), // Generate a unique ID
      quantity: 1, // Default quantity
    };
    setCart([...cart, newItem]);
  };

  const updateQuantity = (cartItemId, quantity) => {
    const newQuantity = Number(quantity);
  
    if (newQuantity < 0) {
    
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.cartItemId === cartItemId ? { ...item, quantity: 0 } : item
        )
      );
      
    } else {
      // Update the quantity
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.cartItemId === cartItemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };
  
  const removeFromCart = (cartItemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartItemId !== cartItemId));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
