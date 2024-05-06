import { useContext } from "react";

import Button from "../UI/Button.jsx";
import Modal from "../UI/Modal.jsx";
import {currencyFormatter} from "../util/formatting.js";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Cart () {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.price * item.quantity, 0);

  function handleHideCart () {
    userProgressCtx.hideCart();
  }

  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">
        {currencyFormatter.format(cartTotal)}
      </p>
      <p className="modal-actions">
        <Button textOnly onClick={handleHideCart}>Close</Button>
        <Button onClick={handleHideCart}>Go To Checkout</Button>
      </p>
    </Modal>
  )
}