import React, { useState } from 'react'
import Body from './Body'
import Navbar2 from './Navbar2';
//import Navbar from './Navbar'

const Ecom = () => {
  const [cart, setCart] = useState([]);
  return (
    <>
    {/* <Navbar 
    cart = {cart}
    setCart = {setCart}
    /> */}
    <Navbar2
    cart = {cart}
    setCart = {setCart}
     />
    <Body 
    cart = {cart}
    setCart = {setCart}
    />
    </>
   
  )
}

export default Ecom