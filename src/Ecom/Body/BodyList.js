import React from 'react'
import ListCard from '../../Components/ListCard'

const BodyList = (props) => {
  const {item, cart, setCart } = props
  
  return (
    <>
    <div className='Body-list overflow-hidden '>
      <div className="row " >
        {item.map((item) => {
          return (<div className="col-lg-3 Body-list-card" key={item.id}>
          <ListCard 
          item = {item}
          cart = {cart}
          setCart = {setCart}
          />
        </div>)
        })} 
      </div>
    </div>
    </>
    
  )
}

export default BodyList