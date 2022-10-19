import React from 'react'
import classes from './DrinkItemForm.module.css'
import Input from '../UI/Input'


function DrinkItemForm(props) {
  return (
    <form className={classes.form}>
        <Input label ="Amount" input = {{
            id : props.id,
            type : 'Number',
            min : '1',
            max : '5',
            step : '1',
            defaultValue: '1',
        }}/>
        <button> + Add</button>
    </form>
  )
}

export default DrinkItemForm