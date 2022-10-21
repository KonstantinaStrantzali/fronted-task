import React from 'react'
import CartContext from './cart-context'
import {useReducer} from 'react'

const defaultCartState = {
  items : [],
  totalAmount : 0
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD'){
    const updatedItems = state.items.concat(action.items);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount, 
    }
  }
  return defaultCartState
}
function CartProvider({children}) {

 const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

 const addItemToCart = (item) => {
  dispatchCartAction({type: 'ADD', item:item})
}
const removeItem = (id) => {
  dispatchCartAction({type: "REMOVE", })
}

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItem,
      }
  

    

  return (
    <CartContext.Provider value={cartContext}>{children}
    </CartContext.Provider>
  )
}

export default CartProvider