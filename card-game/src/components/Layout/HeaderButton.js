import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderButton.module.css'
import {useContext} from 'react'
import CartContext from '../../store/cart-context'

function HeaderButton({onClickBtn }) {
  const cartCtx = useContext(CartContext)
  const cartItemsNum = cartCtx.items.reduce((curNum, item) => {
   return curNum + item.amount
  },0)
  return (
    <div><button className={classes.button} onClick={onClickBtn}> {/*onClick event points to the prop passed (passing value through multiple level of componets*/}
        <span className={classes.icon}><CartIcon/></span>
        <span></span>
        <span className={classes.badge}>{cartItemsNum}</span>
        </button></div>
  )
}

export default HeaderButton