import React, { useState } from "react"
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import Header from './components/Header';
import Products from './pages/Products';


function App() {
   const [items, setItems] = useState([]);  
   const [sum, setSum] = useState (0);

    const addProduct = (newItem) => {

    setItems([
      ...items,
      newItem

    ]);


    if (sum === 0) {
      setSum(newItem.price)
  } else {
      setSum(sum + newItem.price)
  }
  
  }  

  const deleteAll = () => {

    setItems([]);
   
  } 

   
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header
           items={items} 
           countCartItems={items.length}
           setItems={setItems}
           sum={sum}
           deleteAll={deleteAll}
           
          
        />

        <Routes>
          <Route path="/" element={<Products setSum={setSum} addProduct={addProduct} />}></Route>
          <Route path="/product/:wie" element={<Product addProduct={addProduct} />} />
          <Route path="/checkout" element={<Checkout items = {items} addProduct={addProduct} />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;