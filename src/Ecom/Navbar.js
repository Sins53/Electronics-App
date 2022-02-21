import React, { useState } from 'react'
import { BsCart3 } from "react-icons/bs";
import profilePic from '../assets/images/profile-pic.jpg';
import Cart from '../Components/Cart'

const Navbar = (props) => {
  const {cart} = props
  const [showCart, setShowCart] = useState(false);

  const displayCart = () => {
    setShowCart(!showCart);
    //console.log(showCart)
    //console.log(cart)
  }


  return (
    <>
    <div className="Navbar">
      <div className="row justify-content-between">
        <div className="col-4">
          <img className='img-responsive ms-4' src={profilePic} alt="" />
          <h1 className='Navbar-title'>Shopmandu</h1>
        </div>
        <div className="col-3">
          <h2 className='Navbar-text'>Home</h2>
          <button className='me-4' onClick={displayCart}>
            <BsCart3 />
          </button>
          <img className='img-responsive' src={profilePic} alt="" />
        </div>
      </div>
    </div>
    {showCart === true ? 
    <> 
    <div className="container Cart-layout">
    <Cart 
    cart = {cart}
    setShowCart = {setShowCart}
    />
    </div>
    </> : null}
  </>
  )
}

export default Navbar