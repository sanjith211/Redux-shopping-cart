import React from "react";
import cartIcon from "../../Assets/shopping-cart.png";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../Store/Slices/cartSlice";

const Header = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector(selectCart);
  const length = cartItems.length;
  const navigateToCart = () => {
    navigate("/cart");
  };

  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div className="header-container">
      <div
        className="left"
        onClick={() => {
          navigateToHome();
        }}
      >
        <h2>Home</h2>
      </div>
      <div
        className="right"
        onClick={() => {
          navigateToCart();
        }}
      >
        <img className="image" src={cartIcon} alt="Cart-Icon" />
        <span className="cart-count">{length}</span>
      </div>
    </div>
  );
};

export default Header;
