import React from "react";
import { Plus } from "phosphor-react";

export const Product = (props) => {
  const { id, title, price, thumbnail, discountPercentage, stock } = props.data;
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
        <button id="addtocart">
          <div className="addtocart">
            <Plus />
            Add to Cart
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
