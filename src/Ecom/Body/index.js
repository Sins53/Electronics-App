import React, { useEffect, useState } from 'react'
import BodyTitle from './BodyTitle'
import BodyList from './BodyList'
import axios from "axios";

const Body = (props) => {
  const [item, setItem] = useState([]);
  const [filterData, setFilterData] = useState({min: 1,
    max: 1000000000,
    category: 0,})

  const {cart, setCart} = props

  const fetchItemList = async () => {
    const response = await axios.get("https://electronic-ecommerce.herokuapp.com/api/v1/product");
    //setItem(response?.data || []);
    //console.log(item)
    var qwe = response.data
    setItem(qwe.data.product)
  };

  useEffect(() => {
    fetchItemList();
  }, []);//

  //console.log('here')
  //console.log(cart)

  return (
    <>
    <div className="container mt-3">
      <BodyTitle 
      item ={item}
      setFilterData = {setFilterData}
      />
      <BodyList 
      item={item} 
      cart = {cart}
      setCart = {setCart}
      filterData = {filterData}
      />
    </div>

    </>
  )
}

export default Body