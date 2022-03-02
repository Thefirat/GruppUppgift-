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
import CartProduct from "./components/CartProduct";


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

  const deleteItem = (id) => {
    console.log( 'App->deleteItem ')
    console.log('ID:' + id);
  } 

  return (
    <div className="App">
      <BrowserRouter>
        <Header
           items={items} 
           countCartItems={items.length}
           /* setOpen={setOpen}  */
          deleteItem={deleteItem} 
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