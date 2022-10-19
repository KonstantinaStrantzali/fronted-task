import React from 'react'
import classes from './DrinkItem.module.css'



function DrinkItem(props) {

  const price = `$${props.price.toFixed(2)}`;

  return (
 <li className={classes.drink}>
    <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.drink}>{price}</div>
    </div>
 </li>
  )
}

export default DrinkItem