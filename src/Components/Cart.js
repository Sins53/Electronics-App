import React, { useEffect, useState } from 'react'
import Adder from './Adder'
import {AiFillCloseCircle} from 'react-icons/ai'

var qwe = 0;
var total = 0;
var stockName = '';
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
    //console.log(qwe)
    setTotalProducts(qwe)
  }
  const totalAmount = (price,order) => {
    total = (price*order) + total
    setAmount(total)
  }
  
   

  return (
    <>
    <div className="Cart-layout">
      <div>
        <div className="row">
          <div className="col"><h3>Unique Items : {cart.length} </h3></div>
          <div className="col-auto"> <button onClick={closeCart}> <AiFillCloseCircle /></button> </div>
        </div>
        
        
        <h3>Total items : {totalProducts} </h3>
      </div>
      
        {cart.map((item) => {
          //{cart.indexOf(item)===0 ? qwe = 0 : console.log('false')}
          //{productCount(item.order)}
          //{totalAmount(item.r,item.order)} 
          {item.stock < 5 ? stockName = 'danger' : item.stock < 10 ? stockName = 'ok' : stockName = 'full'}
          return (
            <>
            <div className="row mt-1">
            <div className="col-auto">
             <button className='btn btn-danger mt-3' onClick={() => removeCart(item.id)}> <AiFillCloseCircle /></button> 
             </div>
            <div className="col-auto">
        <img className='Cart-img' src={imgUrl + item.image} alt="" />
        </div>
        <div className="col-4">
          <h4>{item.name}</h4>
          <h4>{'Rs. ' + item.r*item.order}</h4>
        </div>
        <div className="col-3 ml-auto text-end">
          <h5 className={`ListCard-${stockName}`}>{ 'Stock remaining: ' + item.stock}</h5>
          <Adder
          cartOrder = {item.order}
          cart = {cart}
          id = {item.id}
          setCart = {setCart}
          />
          <h5>Per Unit Price : {item.toRs}</h5>
        </div>
        </div>
            </>
          )
        })}
      <div className='text-end mt-5'>
        <h2>Total Amount : {amount} </h2>
        <button className='btn btn-success'>Checkout</button>
      </div>
    </div> 
    </>
  )
}

export default Cart