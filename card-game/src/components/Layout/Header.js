import React from 'react'
import {Fragment} from 'react'
import {classes } from './Header.module.css'
import coffeeImage from '../../assets/coffee.avif';

function Header() {
  return (
    <Fragment>
        <header className='{classes.header}'>
            <h1>Instant Coffee</h1>
            <button>Cart</button>
        </header>
        <div>
        <img src={coffeeImage} ></img>
        <div></div>
        </div>


    </Fragment>
  )
}

export default Header