import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { getProducts } from "../../products";
const PRODUCTS = await getProducts();

import { CartItem } from "./cartItem";

export const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <div className="cart-items">
      {PRODUCTS.map((product) => {
        if (cartItems[product.id] !== 0) {
          return <CartItem key={product.id} data={product}></CartItem>;
        }
      })}
    </div>
  );
};
