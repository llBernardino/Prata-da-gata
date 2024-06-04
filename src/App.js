import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Products} from './components/Products/index.js';
import {Headerr} from './components/Header/header.js';
import {Hero} from './components/Hero/index.js';
import {Carrouselprom} from './carrousels/carrouselprom.js'
import {Carrouselproducts} from './carrousels/carrouselproducts.js'
function App() {
  return (
    <div className="App">
      <Headerr/>
      <Hero/>
      <Carrouselprom/>
      <Carrouselproducts/>
      <Products/>
    </div>
  );
}

export default App;
