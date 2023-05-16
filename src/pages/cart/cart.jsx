import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { getProducts } from "../../products";
const PRODUCTS = await getProducts();
import "./cart.css";
import { CartItem } from "./cartItem";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext);

  const navigate = useNavigate();
  return (
    <div className="cart-items">
      <div className="items">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product}></CartItem>;
          } else {
            return "";
          }
        })}
      </div>
      {getTotalAmount() > 0 ? (
        <div className="checkout">
          <p>
            <strong> Subtotal: ${getTotalAmount()}</strong>
          </p>
          <div className="checkout-btns">
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button>Proceed to Checkout</button>
          </div>
        </div>
      ) : (
        <h2>The Cart is empty...</h2>
      )}
    </div>
  );
};
