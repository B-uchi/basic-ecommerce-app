import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { getProducts } from "../../products";
const PRODUCTS = await getProducts();
const { cartItems } = useContext(ShopContext);
import { CartItem } from "./cartItem";

const checkCart = (product) => {
  return cartItems[product.id] > 0;
};

export const Cart = () => {
  return (
    <div className="cart-items">
      {PRODUCTS.map((product) => {
        cartItems[product.id] > 0 ? (
          <CartItem key={product.id} data={product}></CartItem>
        ) : (
          ""
        );
      })}
    </div>
  );
};
