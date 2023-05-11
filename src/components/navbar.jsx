import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { ShoppingCart } from "phosphor-react";

function Navbar() {
  return (
    <div className="navbar">
      <h1>LS</h1>
      <div className="menuitems">
        <Link className="navlink" to={"/"}>
          Shop
        </Link>
        <Link className="navlink" to={"/cart"}>
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
