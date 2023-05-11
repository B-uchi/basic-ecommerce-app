import React from "react";
// import { Product } from "./product.jsx";
import "../shop/shop.css";
import { getProducts } from "../../products.js";
const PRODUCTS = await getProducts();

export const Shop = () => {
  return (
    <div className="products">
      {PRODUCTS == [] ? (
        PRODUCTS.map(() => {
          <h2>YOO</h2>;
        })
      ) : (
        <p id="datafetcherror">Failed to fetch data</p>
      )}
    </div>
  );
};
