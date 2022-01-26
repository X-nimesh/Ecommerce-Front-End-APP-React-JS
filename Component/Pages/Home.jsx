import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Account from './Account';
import Login from './Login';

const Home = () => {
  useEffect(()=>{
    window.scroll(0,0);
    fetchProducts()
  },[])
 let [products,useProducts]=useState(undefined);
let response= undefined;
let res= undefined;
async function fetchProducts(){
      response =await fetch("https://fakestoreapi.com/products?limit=10");
      res= await response.json()
      console.log(res);
      useProducts(res);
} 

console.log(products);
if(products==undefined){
  return (
    <h1>
      Loading.....
    </h1>
  )
}
else{
    return (
      <div className="home">
        <h2> 
          Products
        </h2>
        <div className="products">
        {/* <p>{products[0].category}</p> */}
        {products.map((product,i)=>{
          return(
           
             
                <div className="product">
                  <img  src={product.image} alt="" />
                  <div className="details">  
                    <h2>{product.title}</h2>
                    <h3>price: ${product.price}</h3>
                    <h4>{product.description}</h4>
                  </div>
                </div>
              
          )
        })
        }
      
       </div>
        {/* <div className="products">
          <div className="product">
            <img  src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
            <div className="details">  
              <h2>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptopsg</h2>
              <h3>price: Rs.2999</h3>
              <h4>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday.</h4>
            </div>
          </div>
        </div> */}


      </div>
    
    )
    // return login ? <Account/> :<Login/>;
}
}

export default Home;
