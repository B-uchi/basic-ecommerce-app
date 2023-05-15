import React, { createContext, useState } from "react";
import { getProducts } from "../products";
const PRODUCTS = await getProducts();

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const [cartItems, setCartItems] = useState(getDefaultCart());

export const ShopContextProvider = (props) => {
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const updateCartItems = (amount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: amount }));
  };

  console.log(cartItems);
  const contextValue = { cartItems, addToCart, removeFromCart, setCartItems };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
