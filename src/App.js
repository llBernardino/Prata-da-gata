import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Hero} from './components/pages/index/Hero/index.js';
import {SHeader} from './components/pages/index/Header/index.js';
function App() {
  return (
    <div className="App">
      <SHeader/>
     <Hero/>
    </div>
  );
}

export default App;
