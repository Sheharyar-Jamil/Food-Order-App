import React, {useContext} from 'react';
import classes from './MealsItem.module.css';
import MealItemForm from "./MealItemForm";
import CartContext from '../../../context/cart-context';

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const addCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div><MealItemForm onAddToCart = {addCartHandler}/></div>
    </li>
  );
};

export default MealItem;
