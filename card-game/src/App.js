import React, {Fragment, useState} from 'react';
import './App.css';
import Drinks from './components/Drinks/Drinks'
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';


function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }
  
  const hideCartHandler = () => {
    setCartIsShown(false)
  }
  return (
    <Fragment>
      {cartIsShown && <Cart onHide ={hideCartHandler}/>} {/*if cartIsShown is truthy show the cart */}
      <Header onShow = {showCartHandler}/>{/*passing prop onShow points at showCartHandler */}
      <main>
        <Drinks/>
      </main>
    </Fragment>
  );
}

export default App;