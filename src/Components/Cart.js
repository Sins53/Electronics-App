import React, { useState } from 'react'
import Adder from './Adder'
import {AiFillCloseCircle} from 'react-icons/ai'


var qwe = 0;
const Cart = (props) => {
  const [amount, setAmount] = useState(0)
  const [totalProducts, setTotalProducts] = useState(0)
  const {cart, setShowCart} = props

  
  function closeCart(){
    setShowCart(false)
  }
  var imgUrl = 'https://electronic-ecommerce.herokuapp.com/'

  return (
    <>
    <div className="container">
      <div>
        <div className="row">
          <div className="col"><h1>Unique Items : {cart.length} </h1></div>
          <div className="col-auto"> <button onClick={closeCart}> <AiFillCloseCircle /></button> </div>
        </div>
        
        
        <h1>Total items : {totalProducts} </h1>
      </div>
      
        {cart.map((item) => {
          {qwe = qwe + item.order }
          {console.log(qwe)}
          return (
            <>
            <div className="row mt-1">
            <div className="col-auto cimg">
        <img className='cimg-im' src={imgUrl + item.image} alt="" />
        </div>
        <div className="col-4 ctext ">
          <h2>{item.name}</h2>
          <h2>{item.toRs}</h2>
        </div>
        <div className="col-3 ml-auto cstock text-end">
          <h5>{ 'Stock remaining: ' + item.stock}</h5>
          <h5><Adder
          cartOrder = {item.order}
          /> </h5>
          <h5>Ordered {item.order}</h5>
        </div>
        </div>
            </>
          )
        })}
      <div className='text-end mt-5'>
        <h5>Total Amount </h5>
        <button>Checkout</button>
      </div>
    </div> 
    {console.log(qwe)}
    
    </>
  )
}

export default Cart