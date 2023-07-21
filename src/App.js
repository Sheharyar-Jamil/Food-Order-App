import React, { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./context/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const cartShownHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      <Header onShowCart={cartShownHandler} />
      {cartIsShown && <Cart onClose={hideCartHandler} />}

      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
