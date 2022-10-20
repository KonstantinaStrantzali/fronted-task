import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'

function Cart() {
 const cartItems = <ul className={classes['cart-items']}>{[{ id : 'c1', name : "Sushi", amount: "2", price: 12.00}].map((item) => 
 <li>{item.name}</li>)} </ul>
  return (
    <Modal>
    <div>{cartItems}</div>
    <div className= {classes.total}></div>
    <div className = {classes.actions}>
    <button className={classes['button--alt']}>Close</button>
    <button className={classes.button}>Order</button>
    </div>
    </Modal>
  )
}

export default Cart