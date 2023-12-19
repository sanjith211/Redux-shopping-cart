import React from "react";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../Store/Slices/cartSlice";
import "./cartItems.css";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementQuantity({ id: item.id }));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity({ id: item.id }));
  };

  const handleRemove = () => {
    dispatch(removeFromCart({ id: item.id }));
  };

  return (
    <div>
      <div className="title">
        <span className="row">Product</span>
        <span className="row">Brand</span>
        <span className="row">Price</span>
        <span className="row">Discount-Percentage</span>
        <span className="row">Rating</span>
        <span className="row">Quantity Increment/Decrement</span>
        <span className="row">Total Quantity</span>
        <span className="row">Sub-Total</span>
        <span className="row">Remove from Cart</span>
      </div>
      <div className="container">
        <div className="data">
          {item.thumbnail && (
            <div id="row1">
              <img className="images" src={item.thumbnail} alt={item.title} />
              <span>
                <h3>{item.title}</h3>
              </span>
            </div>
          )}
          <p id="row1">{item.brand}</p>
          <p id="row1">${item.price}</p>
          <p id="row1">{item.discountPercentage}%</p>
          <p id="row1">{item.rating}</p>

          <div id="row2">
            <div className="row-button">
              <button onClick={() => handleIncrement()}>+</button>
              <button onClick={() => handleDecrement()}>-</button>
            </div>
          </div>
          <p id="row2" className="quantity">
            {item.quantity}
          </p>
          <p id="row2" className="subtotal">
            <b>$</b>
            {item.price * item.quantity}
          </p>
          <div id="row2">
            <button onClick={() => handleRemove()}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
