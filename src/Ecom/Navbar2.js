import React, { useState } from 'react'
import { BsCart3 } from "react-icons/bs";
import profilePic from '../assets/images/profile-pic.jpg';
import Cart2 from '../Components/Cart2'

const Navbar2 = (props) => {
  const {cart, setCart} = props

  const [amount, setAmount] = useState(0)
  const [totalProducts, setTotalProducts] = useState(0)

  const resetCart = () => {
    setCart([])
  }

  return (
    <>
    <div className="Navbar">
      <div className="row justify-content-between">
        <div className="col-4">
          <img className='img-responsive ms-4' src={profilePic} alt="" />
          <h1 className='Navbar-title'>Shopmandu</h1>
        </div>
        <div className="col-4 text-end me-4">
          <h2 className='Navbar-text'>Home</h2>
          <button className='me-4 Navbar-btn' data-bs-toggle="modal" data-bs-target="#cartModal">
            <BsCart3 />
          </button>
          <h2 className='Navbar-count'> {cart.length} </h2>
          <img className='img-responsive' src={profilePic} alt="" />
        </div>
      </div>
    </div>

    <div className="modal fade" id="cartModal" tabindex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <div>
        <h4 className="modal-title" id="cartModalLabel">Unique Items : {cart.length}</h4>
        <h4>Total items : {totalProducts} </h4>
        </div> 
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <Cart2 
    cart = {cart}
    setCart = {setCart}
    setTotalProducts = {setTotalProducts}
    setAmount = {setAmount}
    />
      </div>
      <div className="modal-footer">
        <div className='text-end'>
         <h2>Total Amount : {amount} </h2>
         <button type="button" className="btn btn-danger" onClick={resetCart}>Reset</button>
         <span>  </span>
         <button type="button" className="btn btn-success">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</div>
  </>
  )
}

export default Navbar2