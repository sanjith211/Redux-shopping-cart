import React from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../Store/Slices/cartSlice";
import CartItem from "../CartItems/cartItems";

const Cart = () => {
  const { cartItems } = useSelector(selectCart);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Amount: ${totalAmount}</p>
    </div>
  );
};

export default Cart;
