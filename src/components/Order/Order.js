import React from 'react';
import classes from './Order.css';

const order = (props) => {
  const ingredients = [];
  console.log('====================================');
  console.log(props.ingredients);
  console.log('====================================');
  for (let ingredientName in props.ingredients) {
    ingredients.push(
      {
        name: ingredientName, 
        amount: props.ingredients[ingredientName]
      });
  }
  console.log(ingredients);
  const ingredientOut = ingredients.map(ig => {
    
    return <span 
    style={{
      textTransform: 'capitalize',
      display: 'inline-block',
      margin: '0 8px',
      border: '1px solid grey',
      padding: '5px'
    }}
    key={ig.name}>{ig.name}({ig.amount})</span>;
  })

  return (
    <div className={classes.Orders}>
      <p>Ingredients: {ingredientOut}</p>
      <p>Price: <strong>USD {Number.parseFloat(props.price.toFixed(2))}</strong></p>
    </div>
  )
  
};

export default order;
