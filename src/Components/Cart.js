import React, { useEffect, useState } from 'react'
import Adder from './Adder'
import {AiFillCloseCircle} from 'react-icons/ai'

var qwe = 0;
var total = 0;
const Cart = (props) => {
  const [amount, setAmount] = useState(0)
  const [totalProducts, setTotalProducts] = useState(0)
  const {cart,setCart, setShowCart} = props

  var imgUrl = 'https://electronic-ecommerce.herokuapp.com/'

  useEffect(() => {
    qwe = 0;
    total = 0;
    console.log('will mount')
    return () => {
      qwe = 0;
      total = 0;
      console.log('will dismount')
    }
  }, [])

  useEffect(() => {
    qwe = 0;
    total = 0;
    if(cart.length===0){
      setAmount(0);
      setTotalProducts(0);
    }
    cart.forEach((item) => {
    productCount(item.order)
    totalAmount(item.r,item.order)
    }) 
  }, [cart])
  

  

  function closeCart(){
    setShowCart(false)
  }

  function removeCart(id) {
    //alert(id)
    var newArr = cart.filter(function(cart) {
      return cart.id !== id;
    });
    console.log(newArr)
    setCart(newArr)
  }
  
  const productCount = (order) => {
    qwe = qwe + order;
    console.log(qwe)
    setTotalProducts(qwe)
  }
  const totalAmount = (price,order) => {
    total = (price*order) + total
    setAmount(total)
  }
  

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
          //{cart.indexOf(item)===0 ? qwe = 0 : console.log('false')}
          //{productCount(item.order)}
          //{totalAmount(item.r,item.order)}
          return (
            <>
            <div className="row mt-1">
            <div className="col-auto">
             <button onClick={() => removeCart(item.id)}> <AiFillCloseCircle /></button> 
             </div>
            <div className="col-auto cimg">
        <img className='Cart-img' src={imgUrl + item.image} alt="" />
        </div>
        <div className="col-4">
          <h2>{item.name}</h2>
          <h2>{'Rs. ' + item.r*item.order}</h2>
        </div>
        <div className="col-3 ml-auto text-end">
          <h5>{ 'Stock remaining: ' + item.stock}</h5>
          <Adder
          cartOrder = {item.order}
          cart = {cart}
          id = {item.id}
          setCart = {setCart}
          />
          <h5>Ordered {item.order}</h5>
        </div>
        </div>
            </>
          )
        })}
      <div className='text-end mt-5'>
        <h5>Total Amount : {amount} </h5>
        <button>Checkout</button>
      </div>
    </div> 
    </>
  )
}

export default Cart