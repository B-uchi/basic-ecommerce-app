import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, title, price, thumbnail, stock } = props.data;
  const {
    addToCart,
    removeFromCart,
    cartItems,
    setCartItems,
    updateCartItems,
  } = useContext(ShopContext);
  let cartItemAmount = cartItems[id];

  return (
    <div className="cart-item">
      <div className="left-side">
        <div
          className="product-img"
          style={{ backgroundImage: `url(${thumbnail})` }}
        ></div>
        <h2>{title}</h2>
        <p>Quantity in Cart: {cartItemAmount}</p>
        <div className="change-quantity">
          <button
            className="quantity"
            id="decrease"
            onClick={() => {
              removeFromCart(id);
            }}
          >
            -
          </button>
          <input
            value={cartItemAmount}
            onChange={(e) => updateCartItems(Number(e.target.value), id)}
          />
          <button
            className="quantity"
            id="increase"
            onClick={() => {
              addToCart(id);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="removebtn">
        <p>Total: ${Number(cartItemAmount * price)}</p>
        <button
          id="removeFromCart"
          onClick={() => {
            setCartItems((prev) => ({ ...prev, [id]: 0 }));
          }}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
};
