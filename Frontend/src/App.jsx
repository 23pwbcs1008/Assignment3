import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { CartProvider } from "./context/cartContext";

const App = () => {
  return (
    <CartProvider>
      <div>
        <h1>E-Commerce App</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;