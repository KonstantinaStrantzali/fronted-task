import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderButton.module.css'

function HeaderButton({onClickBtn }) {
  return (
    <div><button className={classes.button} onClick={onClickBtn}> {/*onClick event points to the prop passed (passing value through multiple level of componets*/}
        <span className={classes.icon}><CartIcon/></span>
        <span></span>
        <span className={classes.badge}>3</span>
        </button></div>
  )
}

export default HeaderButton