import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Products} from './components/Products/index.js';
import {Headerr} from './components/Headerr/header.js';
import {Hero} from './components/Hero/index.js';

function App() {
  return (
    <div className="App">
      <Headerr/>
      <Hero/>
      <Products/>
    </div>
  );
}

export default App;
