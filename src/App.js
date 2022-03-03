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
  /* const [sum, setSum] = useState(undefined)
  const [open, setOpen] = useState(false) */

    const addProduct = (newItem) => {

    setItems([
      ...items,
      newItem

    ]);
  
  }  
 
  
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header
           items={items} 
           countCartItems={items.length}
           setItems={setItems}
           /* setOpen={setOpen}  */
         /*  sum={sum}
          setSum={setSum} */

        />
        <Routes>
          <Route path="/" element={<Products addProduct={addProduct} />}></Route>
          <Route path="/product/:wie" element={<Product addProduct={addProduct} />} />
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;