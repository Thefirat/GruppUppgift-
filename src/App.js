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
   const [quantity, setQuantity] = useState(1);

    const addProduct = (newItem) => {


      newItem = Object.assign({}, {...newItem}, {quantity : quantity})

      setItems([
        ...items,
        newItem

      ]);
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
           deleteAll={deleteAll}
          
           
          
        />

        <Routes>
          <Route path="/" element={<Products addProduct={addProduct} />}></Route>
          <Route path="/product/:wie" element={<Product addProduct={addProduct} />} />
          <Route path="/checkout" element={<Checkout items = {items} addProduct={addProduct} />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App