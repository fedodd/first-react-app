import React, {Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

  //this could be a functional component. doesn't have to ve a class
  componentWillUpdate() {
    console.log('[OrderSummary] will update');
  }

  render () {

    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(ingKey => {
        return (
          <li key={ingKey}>
            <span style={{ textTransform: 'capitalize' }}>{ingKey}</span>: {this.props.ingredients[ingKey]}
          </li>);
      })

    return (
      <Aux>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total price:{this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button
          ButtonType="Danger"
          clicked={this.props.purchaseCanceled}>CANCEL</Button>
        <Button
          ButtonType="Success"
          clicked={this.props.purchaseConfirmed}>CONTINUE</Button>
      </Aux>
    )
  }
};

export default OrderSummary;
