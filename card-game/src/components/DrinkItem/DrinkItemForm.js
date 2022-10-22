import React, { useRef, useState } from 'react'
import classes from './DrinkItemForm.module.css'
import Input from '../UI/Input'



function DrinkItemForm(props) {

  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef()

  const handleFormSubmit = (event) => {  {/* event obj sent as argument when function called */}
  event.preventDefault();

  const enteredAmount = amountInputRef.current.value;
  const enteredAmountNum = +enteredAmount;

  if (enteredAmount.trim().length === 0 || enteredAmountNum < 1 || enteredAmountNum > 5){
    setAmountIsValid(false)
    return
    
  }
  props.onAddCart(enteredAmountNum)
}
  return (
    <form className={classes.form} onSubmit = {handleFormSubmit}>
        <Input 
        label ="Amount" ref = {amountInputRef} input = {{
            
            id : props.id,
            type : 'Number',
            min : '1',
            max : '5',
            step : '1',
            defaultValue: '1',
        }}/>
        <button>  + Add</button>
        {!amountIsValid && <p>Please enter a valid amount</p>}
    </form>
  )
}

export default DrinkItemForm