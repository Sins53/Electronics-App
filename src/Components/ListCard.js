import React, { useState } from 'react'
import Adder from './Adder'

const ListCard = (props) => {
  const [order, setOrder] = useState(1)
  
  const {item, cart, setCart} =props
  const {id, name, image, price, stock, createDate} = item
  var imgUrl = 'https://electronic-ecommerce.herokuapp.com/'

  var stockName = '';

  var toRs = price;
  var arr = toRs.split('$')
  arr.shift();
  var r = Number(arr[0])
  r *= 120
  arr = [r]
  arr.unshift('Rs. ');
  toRs = arr.join('');

  var datetime = createDate;
  var date = new Date(datetime);
  var day = date.getDate() + '-';
  var month = date.getMonth() + 1 + '-';
  var year = date.getFullYear();
  var result = day+month+year;

  const updateCart = () => {
    Object.assign(item, {order: order,toRs: toRs, r : r});        
    var arr = [item , ...cart];
    var unique = [...new Set(arr)]
    setCart(unique);
    //alert(item.name + ' Added to cart')
    //console.log(item);
    //setCart(item)
    //console.log(cart)
  }

  stock < 5 ? stockName = 'danger' : stock < 10 ? stockName = 'ok' : stockName = 'full'  
    
  return (
    <div className='ListCard' id={id}>
      <div className="ListCard-items">
        <div>
        <img className='ListCard-image' src={imgUrl + image} alt="" />
        </div>
        <div className='text-end mt-2'><Adder 
        stock = {stock}
        setOrder = {setOrder}
        />
        </div>
        <div>
          <h4>{name}</h4>
        </div>
        <div>
          <div className="row justify-content-between">
            <div className="col">
              <h4>{toRs}</h4>
            </div>
            <div className="col">
              <h5 className={`ListCard-${stockName} text-end`}>{'Stock left: ' + stock}</h5>
            </div>
          </div>
        </div>
        <div><h4>{'Released on: ' + result}</h4></div>
        <div><button className='ListCard-btn' onClick={updateCart}>Add to Cart</button></div>
      </div>
    </div>
  )
}

export default ListCard