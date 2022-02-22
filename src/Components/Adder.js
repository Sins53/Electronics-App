import React, { useEffect, useState } from 'react'
import { useFormik } from "formik";
import * as Yup from 'yup';
import Validation from "./Error";
import {GrSubtractCircle , GrAddCircle} from 'react-icons/gr'

const initialValues = {
  order : 1,
}
var check = 0;

const Adder = (props) => {
  const [formData, setFormData] = useState(initialValues)
  const {stock , setOrder , cartOrder, cart, id, setCart} = props;

  const validationSchema = Yup.object({
    phone: Yup.number().min(1, 'Lowest 1').max({stock}, 'Select Less').required(),                     
  });

  useEffect(() => {
    if(cartOrder > 1) {
    var a = {
      order : cartOrder
    }
    check = 1;
    setFormData(a) 
    } else {
      setFormData(initialValues)
      check = 0;
    } 
  }, [cartOrder])


  const OrderSub = () => {
    setFormData({order: formData.order - 1})
    //console.log(formData)
    //console.log(stock)
    if(check===0){
      setOrder(formData.order - 1)
    } else {
      const newarr = cart.map((item) => {
        if (item.id===id) {
          console.log(item)
          return {...item, order :  formData.order - 1}
        
        } else {
          return item
        }
      })
      setCart(newarr)
    } 
  }
  const OrderAdd = () => {
    setFormData({order: formData.order + 1})
    console.log(formData)
    if(check===0){
      setOrder(formData.order + 1)
    } else {
      const newarr = cart.map((item) => {
        if (item.id===id) {
          console.log(item)
          return {...item, order :  formData.order + 1}
        } else {
          return item
        }
      })
      setCart(newarr)
    } 
  }

  const { values, errors, handleChange} =
    useFormik({
      enableReinitialize: true,
      initialValues : formData,
      validationSchema,
    });


  return (
    <>
      <div className="AdderCart">
          <button onClick={OrderSub}>
          <GrSubtractCircle />
          </button>
        <form className='col-auto AdderCart-form' onSubmit={(e) => e.preventDefault() }>   
      <input 
        type="number" 
        name='order'
        value={values.order}
        onChange={handleChange} />
        <Validation errors={errors} name="order" />
      </form>
      <button onClick={OrderAdd}>
        <GrAddCircle />
        </button>
      </div>
      
    </>
  )
}

export default Adder