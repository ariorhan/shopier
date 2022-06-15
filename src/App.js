import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import products from "./products.json"
import Product from './components/Product';
import Basket from './components/Basket';
import Footer from './components/Footer';

function App() {

  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState([0]);
  

  const resetBasket = () => {
    setBasket([])
  }

  
  useEffect(()=> {
    setTotal(
      basket.reduce((acc,item) => {
        return acc + (item.amount * (products.find(product => product.id === item.id).price))
      },0),
    )
  },[basket])

  return (
    
    <div className='container'>      
      <Header total = {total} money = {money}/>
      <div className='products'> 
          {products.map(product => (
          <Product key={product.id} basket={ basket} setBasket = {setBasket} product ={product} />
          ))}
      </div>       
      <Basket total = {total} money = {money} resetBasket={resetBasket} products ={products} basket = {basket} />       
                 
      <Footer />
    </div>
  );
}

export default App;
