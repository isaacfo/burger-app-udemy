import React, {Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.css'

// changed into class component cuz we need to use prop-types on it
// doesnt need to have state just cuz its a class component
class BurgerIngredient extends Component {
    render () {
        let ingredient = null;

        // switch checks if the case exists in the code, i think
        // inside a class to access props with this.
        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = (<div className={classes.BreadTop}>
                <div className={classes.Seeds1}></div>
                <div className={classes.Seeds2}></div>
                </div>
                
            );
                break;
            case ('meat'):
                ingredient = <div className={classes.Meat}></div>
                break;
            case ('cheese'):
                ingredient = <div className={classes.Cheese}></div>
                break;
            case ('bacon'):
                ingredient = <div className={classes.Bacon}></div>
                break;
            case ('salad'):
                ingredient = <div className={classes.Salad}></div>
                break;
            default:
                    ingredient = null;
                    
        
            }
            return ingredient;
    }
    

    
  
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;