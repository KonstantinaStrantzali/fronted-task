import React, {Fragment} from 'react';
import './App.css';
import Drinks from './components/Drinks/Drinks'
import Cart from './components/Cart/Cart';

import Header from './components/Layout/Header';

function App() {
  return (
    <Fragment>
      <Cart/>
      <Header/>
      <main>
        <Drinks/>
      </main>
    </Fragment>
  );
}

export default App;