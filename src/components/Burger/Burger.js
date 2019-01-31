import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // transforms the ingredient object into an array 
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        });
     })
    //  transforms array into something else
     .reduce((arry, el) => {
         return arry.concat(el)
     }, []);
     if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
     }
     console.log(transformedIngredients)

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />            
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />            
        </div>

    );
};


export default burger;