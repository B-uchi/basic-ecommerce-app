import React, { useContext } from "react";
import { Plus } from "phosphor-react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, title, price, thumbnail, discountPercentage, stock } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  let cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <div
        id="imgcontainer"
        style={{ backgroundImage: `url(${thumbnail})` }}
      ></div>
      <h3>{title}</h3>
      <div className="prices">
        <p>${price}</p>
        <small>{discountPercentage}% off</small>
      </div>
      <p>{stock} units left.</p>
      <div className="buttons">
        <button id="addtocart" onClick={() => addToCart(id)}>
          <div className="addtocart">
            <Plus />
            Add to Cart {cartItemAmount > 0 ? <>({cartItemAmount})</> : ""}
          </div>
        </button>
        <button id="buynow">
          <div className="buynow">
            <Plus />
            Order Now
          </div>
        </button>
      </div>
    </div>
  );
};
