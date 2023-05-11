import React from "react";
import { Product } from "./product.jsx";
import "../shop/shop.css";
import { getProducts } from "../../products.js";
const PRODUCTS = await getProducts();

export const Shop = () => {
  return (
    <div className="products">
      {PRODUCTS == null ? (
        <p id="datafetcherror">Failed to fetch data</p>
      ) : (
        PRODUCTS.map((products) => (
          <Product key={products.id} data={products} />
        ))
      )}
    </div>
  );
};
