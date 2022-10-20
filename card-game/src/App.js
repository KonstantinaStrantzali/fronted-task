import { useState} from 'react';
import './App.css';
import Drinks from './components/Drinks/Drinks'
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import CartProvider from './store/CartProvider';


function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }
  
  const hideCartHandler = () => {
    setCartIsShown(false)
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onHide ={hideCartHandler}/>} {/*if cartIsShown is truthy show the cart */}
      <Header onShow = {showCartHandler}/>{/*passing prop onShow points at showCartHandler */}
      <main>
        <Drinks/>
      </main>
    </CartProvider>
  );
}

export default App;