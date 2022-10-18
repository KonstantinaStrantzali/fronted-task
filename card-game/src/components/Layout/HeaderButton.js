import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderButton.module.css'

function HeaderButton() {
  return (
    <div><button className={classes.button}>
        <span className={classes.icon}><CartIcon/></span>
        <span></span>
        <span className={classes.badge}>3</span>
        </button></div>
  )
}

export default HeaderButton