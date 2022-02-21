import React, { useState } from 'react'
import { useFormik } from "formik";
import * as Yup from 'yup';
import Validation from "./Error";
import {GrSubtractCircle , GrAddCircle} from 'react-icons/gr'

const initialValues = {
  order : 1,
}

const Adder = (props) => {
  const [formData, setFormData] = useState(initialValues)
  const {stock , setOrder , cartOrder} = props;

  const validationSchema = Yup.object({
    phone: Yup.string().min(1, 'Lowest 1').max({stock}, 'Must be below 10').required(),                     
  });
  if(cartOrder>1){
    console.log(cartOrder)
  }
  

  const OrderSub = () => {
    setFormData({order: formData.order - 1})
    console.log(formData)
    //console.log(stock)
    setOrder(formData.order - 1)
  }
  const OrderAdd = () => {
    setFormData({order: formData.order + 1})
    console.log(formData)
    setOrder(formData.order + 1)
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