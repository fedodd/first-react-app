import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from "../../../components/UI/Spinner/Spinner";
import axios from "../../../axios-orders";
import classes from './ContactData.css';

class ContactData extends Component {
  state= {
    name: '',
    email: '',
    adress: {
      streeet: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Fedor',
        adress: {
          street: 'Test street',
          zipCode: '123900',
          country: 'Germany'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }

    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false});
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({loading: false});
      });
  }

  render () {

    let form = (<form>
      <input className={classes.Input} type="text" name="name" placeholder="your name"></input>
      <input className={classes.Input} type="email" name="email" placeholder="your email"></input>
      <input className={classes.Input} type="text" name="street" placeholder="your street"></input>
      <input className={classes.Input} type="text" name="postal" placeholder="postal code"></input>
    </form>);

    if (this.state.loading) {
      form = <Spinner />;
    } 
    

    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact</h4>
        {form}
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </div>
    )
  }

}

export default ContactData;
