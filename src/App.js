import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Products} from './components/Products/index.js';
import {SHeader} from './components/Header/index.js';
import {Hero} from './components/Hero/index.js';
function App() {
  return (
    <div className="App">
      <SHeader/>
      <Hero/>
     <Products/>
    </div>
  );
}

export default App;
