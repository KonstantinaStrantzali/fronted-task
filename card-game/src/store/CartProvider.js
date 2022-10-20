import React from 'react'
import CartContext from './cart-context'

function CartProvider({children}) {

    const addItemToCart = (item) => {}
    const removeItem = (id) => {}

    const cartContext = {
  items: [],
  totalAmount: 0,
  addItem: addItemToCart,
  removeItem: removeItem,
    }
  return (
    <CartContext.Provider value={cartContext}>{children}
    </CartContext.Provider>
  )
}

export default CartProvider