import React, {Fragment} from "react";
import MealsImg from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
    return(
        <Fragment>
        <header className={classes.header}>
        <div className={classes.headingContainer}>
        <h1 className={classes.heading}>React Meals</h1>
        <div className={classes.buttonContainer}>
        <HeaderCartButton onClick={props.onShowCart}/>
        </div>
        </div>
        </header>
        <div className={classes['main-image']}>
            <img src={MealsImg} alt = "The table full of food"/>
        </div>
        </Fragment>
    );
};

export default Header;