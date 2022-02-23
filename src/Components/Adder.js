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
  const [disable, setDisable] = React.useState(false);
  const {stock , setOrder} = props;

  const validationSchema = Yup.object({
    phone: Yup.string().min(1, 'Lowest 1').max({stock}, 'Must be below 10').required(),                     
  });
  

  const OrderSub = () => {
    formData.order >= 2 ? setFormData({order: formData.order - 1}): setDisable(true);
    //setFormData({order: formData.order - 1})
    formData.order > 1 ? setOrder(formData.order - 1) : setOrder(1)
    setOrder(formData.order - 1)
  }
  const OrderAdd = () => {
    formData.order >= stock ? setDisable(true) : setFormData({order: formData.order + 1});
    //setFormData({order: formData.order + 1});
    formData.order === stock ? setOrder(stock) : setOrder(formData.order + 1)
  }
  const handleChange = (e) => {
    console.log(e.target.value)
    var a = Number(e.target.value)
    setFormData({order: a})
    setOrder(a)
  }

  const { values, errors} =
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
