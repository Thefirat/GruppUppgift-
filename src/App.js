import logo from './logo.svg';
import './App.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import React from 'react';
import Footer from './components/Footer';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import Header from './components/Header';
import Products from './pages/Products';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
    
        <Routes>
        <Route path="/" element={<Products/>}>Chekout</Route>
        <Route path="/product" element={<Product />} />
        <Route path="/chekout" element={<Checkout />}>Chekout</Route>
      </Routes>

      <Footer/>
    </BrowserRouter>

  



      

    </div >
  );
}

export default App;
