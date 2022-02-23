import React, { useEffect } from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
import Adder2 from './Adder2';

var qwe = 0;
var total = 0;
var stockName = '';
const Cart = (props) => {
  const {cart, setCart, setTotalProducts, setAmount} = props

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
     totalAmount(item.r, item.order)
    }) 
  }, [cart])
  
  function removeCart(id) {
    var newArr = cart.filter(function(cart) {
      return cart.id !== id;
    });
    console.log(newArr)
    setCart(newArr)
  }
  
  const productCount = (order) => {
    qwe = qwe + order;
    setTotalProducts(qwe)
  }
  const totalAmount = (price,order) => {
    total = (price*order) + total
    setAmount(total)
  }
  
   

  return (
    <>
    {cart.map((item) => {
      {item.order <= 0 ? removeCart(item.id) : item.stock < 5 ? stockName = 'danger' : item.stock < 10 ? stockName = 'ok' : stockName = 'full'}
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
        <div className="col-4 ml-auto text-end">
          <h5 className={`ListCard-${stockName}`}>{ 'Stock remaining: ' + item.stock}</h5>
          <Adder2
          cartOrder = {item.order}
          cart = {cart}
          id = {item.id}
          setCart = {setCart}
          stock = {item.stock}
          />
          <h5>Unit Price: {item.toRs}</h5>
          {/* <h5>ordered : {item.order}</h5> */}
        </div>
        </div>
        </>
      )
    })}
    </>
  )
}

export default Cart