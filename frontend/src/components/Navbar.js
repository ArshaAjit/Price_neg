import React, {useState} from 'react';
// import Logo from "../assets/logo-social.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder"; 
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import '../styles/Navbar.css';

function Navbar() {

  const [openLinks, setOpenLinks ] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
 } ;
 return (
    <div className="navbar">
        <div className='leftSide' id={openLinks ? "open" : "close"}>
             {/* <img src= {Logo} />   */}
             <div className="hiddenLinks">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/accounts">Accounts</Link> 
              <Link to="/contact">Contact</Link>
            </div>    
        </div>
        <div className='rightSide'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link> 
            <div className='dropdown'>
                <div className='dropbtn'>Accounts</div>
                <div className='dropdown-content'>
                  <div className='test'><Link to="/signup">shopkeeper</Link></div>
                  <div className='test'><Link to="/login">customer</Link></div>
                </div>
            </ div>
            <Link to="/contact">Contact</Link>
            <button onClick={toggleNavbar}>
               <ReorderIcon />
            </button> 
        </div>
        {/* <button><AccountCircleIcon /></button> */}
        <button className='acc'><ShoppingCartIcon /></button>
        <button className='acc'><AccountCircleIcon /></button>
        <div style={{color:"white", marginTop:"20px", marginRight:"10px"}}>arsha</div>
        
    </div>
  )
}

export default Navbar;