import React from 'react'
import ListCard from '../../Components/ListCard'

const BodyList = (props) => {
  const {item, cart, setCart, filterData } = props

  const mlist = ["", "laptop", "mobile", "watch", "keyboard", "headseat"];

  var arr = item.filter(checkFilter);
  function checkFilter(item) {
      if (filterData.category === 0) {
        return item;
      } else {
        if (mlist[filterData.category] === item.category[1]) {
          return item;
        }
        // console.log(mlist[filterData.category])
      }
  }
  
  return (
    <>
    <div className='Body-list overflow-hidden '>
      <div className="row " >
        {arr.map((item) => {
          return (<div className="col-lg-3 Body-list-card" key={item.id}>
          <ListCard 
          item = {item}
          cart = {cart}
          setCart = {setCart}
          />
        </div>)
        })} 
      </div>
      <br /> <br /> <br />
    </div>
    </>
    
  )
}

export default BodyList