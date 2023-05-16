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

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const getTotalAmount = () => {
    let totalAmount = null;
    for (const item in cartItems) {
      let prod = PRODUCTS.find((product) => product.id == item);
      let prodPrice = Number(prod.price) * cartItems[item];
      totalAmount += prodPrice;
    }
    return totalAmount;
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const updateCartItems = (amount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: amount }));
  };

  console.log(cartItems);
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    setCartItems,
    getTotalAmount,
    updateCartItems,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
