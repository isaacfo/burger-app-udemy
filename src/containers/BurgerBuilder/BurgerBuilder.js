import React, { Component } from 'react'

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    // constructor and super can be used as well, but as we see below this is more modern and less syntax
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        }
    }
    
    render () {
        return (
            <Aux>
                {/* this.state.ingredients passes done state stuff which is at the top of the class component */}
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>

            </Aux>
        ); 
    }
}




export default BurgerBuilder;
