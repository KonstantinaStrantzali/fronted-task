import React from 'react'
import {Fragment} from 'react'
import classes from './Header.module.css'
import coffeeImage from '../../assets/coffee.avif';
import HeaderButton from './HeaderButton';

function Header() {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>Instant Coffee</h1>
            <HeaderButton>Cart</HeaderButton>
        </header>
        <div className={classes['main-image']}>{/* Since there is a dash name we cant use dot notation */}
        <img src={coffeeImage} alt="Delicious coffee"></img>
        </div>
    </Fragment>
  )
}

export default Header