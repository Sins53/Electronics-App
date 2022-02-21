import React, { useState } from 'react'
import Body from './Body'
import Navbar from './Navbar'

const Ecom = () => {
  const [cart, setCart] = useState([]);
  return (
    <>
    <Navbar 
    cart = {cart}
    />
    <Body 
    cart = {cart}
    setCart = {setCart}
    />
    </>
   
  )
}

export default Ecom