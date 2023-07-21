import Modal from "../UI/Modal";
import React, { useContext } from "react";
import Button from "../UI/Button";
import classes from "./Cart.module.css";
import CartContext from "../../context/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  }

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({
      ...item,
      amount: 1
    });

  }

  const cartItemsList = <ul className={classes['cart-items']}>{cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onRemove ={cartItemRemoveHandler.bind(null, item.id)}
      onAdd ={cartItemAddHandler.bind(null, item)}
    />
  ))}</ul>;
  return (
    <Modal onClick={props.onClose}>
      <div>
        {cartItemsList}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <Button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </Button>
          {hasItem && <Button className={classes.button}>Order</Button>}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
