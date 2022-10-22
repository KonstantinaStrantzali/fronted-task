import { useContext } from 'react'
import classes from './DrinkItem.module.css'
import DrinkItemForm from './DrinkItemForm'
import CartContext from '../../store/cart-context';



function DrinkItem(props) {

  const price = `$${props.price.toFixed(2)}`;
  const cartCtx= useContext(CartContext)
  
  const addToCartHandle = (amount) => {
 
    cartCtx.addItem({
      id:props.id,
      name: props.name,
      amount : amount,
      price: props.price,
    });

  }

  return (
 <li className={classes.drink}>
    <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.drink}>{price}</div>
    </div>
    <div>
      <DrinkItemForm onAddCart = {addToCartHandle} id = {props.id}/>
    </div>
 </li>
  )
}

export default DrinkItem