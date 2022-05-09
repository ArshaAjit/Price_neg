import React from 'react';
import { Link } from "react-router-dom";
//import BannerImage from "../assets/trending-product.png";
import '../styles/home.css'

function Home() {
  return (
    <div className='home'>
        <div 
          className='headerContainer' 
          // style={{ backgroundImage: url("../assets/products.png") }} 
        >
            <h1> HELLO </h1>
            <p>Find your Products</p>
            <Link to="/products">
                <button> OUR PRODUCTS </button>
            </Link>
        </div>
    </div>
  )
}

export default Home;