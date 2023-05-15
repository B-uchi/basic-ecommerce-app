import React from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, title, price, thumbnail, discountPercentage, stock } = props.data;

  const { cartItems, setCartItems } = useContext(ShopContext);
  let cartItemAmount = cartItems[id];

  return (
    <div className="cart-item">
      <div
        className="product-img"
        style={{ backgroundImage: url({ thumbnail }) }}
      ></div>
      <h2>{title}</h2>
      <p>Quantity in Cart: {cartItemAmount}</p>
      <button
        id="buynow"
        onClick={() => {
          setCartItems((prev) => ({ ...prev, [id]: 0 }));
        }}
      >
        Remove from cart
      </button>
    </div>
  );
};