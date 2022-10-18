import React from 'react'
import { Fragment } from 'react'
import DrinksSummary from './DrinksSummary'
import AvailiableDrinks from './AvailiableDrinks'

function Drinks() {
  return (
    <Fragment>
        <DrinksSummary/>
        <AvailiableDrinks/>
    </Fragment>
  )
}

export default Drinks