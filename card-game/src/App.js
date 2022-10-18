import React, {Fragment} from 'react';
import './App.css';
import Drinks from './components/Drinks/Drinks'

import Header from './components/Layout/Header';

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <Drinks/>
      </main>
    </Fragment>
  );
}

export default App;