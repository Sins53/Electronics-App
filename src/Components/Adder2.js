import React, { useEffect, useState } from 'react'
import { useFormik } from "formik";
import * as Yup from 'yup';
import Validation from "./Error";
import {GrSubtractCircle , GrAddCircle} from 'react-icons/gr'

const initialValues = {
  order : 1,
}

const Adder2 = (props) => {
  const [formData, setFormData] = useState(initialValues)
  const [disable, setDisable] = React.useState(false);
  const {cartOrder, cart, id, setCart, stock} = props;

  const validationSchema = Yup.object({
    phone: Yup.number().required(),                     
  });

  useEffect(() => {
    var a = {
      order : cartOrder
    }
    setFormData(a)  
  }, [cartOrder])


  const OrderSub2 = () => {
    setFormData({order: formData.order - 1})
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
  const OrderAdd1 = () => {
    formData.order >= stock ?
     setDisable(true) :
     setFormData({order: formData.order + 1})
     console.log(stock)
    //setFormData({order: formData.order + 1})
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

  const { values, errors, handleChange} =
    useFormik({
      enableReinitialize: true,
      initialValues : formData,
      validationSchema,
    });

  return (
    <>
      <div className="AdderCart">
          <button onClick={OrderSub2}>
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
      <button onClick={OrderAdd1}>
        <GrAddCircle />
        </button>
      </div>
      
    </>
  )
}

export default Adder2