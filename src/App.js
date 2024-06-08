import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Headerr } from './components/Header/header';
export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Headerr/>
    </BrowserRouter>
  );
};
