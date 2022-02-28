import './App.css';
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
        <Route path="/" element={<Products/>}></Route>
        <Route path="/product/:wie" element={<Product />} />
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>

      <Footer/>
    </BrowserRouter>

  



      

    </div >
  );
}

export default App;