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
import Finish from "./pages/Finish";


function App() {
  const [items, setItems] = useState([]);
  const [sum, setSum] = useState(0);
  const [qty, setQty] = useState(1);



  const addProduct = (newItem) => {
  

 
    const exist = items.find(item => item.id === newItem.id)
    if (exist === undefined) {

      setItems([
        ...items,
        newItem
      ]); 
    }  else {
      exist += newItem.quantity
    } 



    if (sum === 0) {
      setSum(newItem.price)
    } else {
      setSum(sum + newItem.price)
    }
    console.log(newItem);


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
          qty={qty}




        />

        <Routes>
          <Route path="/" element={<Products addProduct={addProduct} qty={qty} setQty={setQty} />}></Route>
          <Route path="/product/:wie" element={<Product addProduct={addProduct} />} />
          <Route path="/checkout" element={<Checkout items={items} addProduct={addProduct} sum={sum} />}></Route>
          <Route path="/finish" element={<Finish />} />
        </Routes>
        <Footer />


      </BrowserRouter>
    </div>
  );
}

export default App