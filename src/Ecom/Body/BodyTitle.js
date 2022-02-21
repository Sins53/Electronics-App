import React from 'react'
import {FaFilter} from 'react-icons/fa'

const BodyTitle = () => {
  return (
    <>
    <div className="row justify-content-between">
      <div className="col-2">
        <h3>Products</h3>
      </div>
      <div className="col-1">
        <button>
          <FaFilter />
          <h4 className='ms-2' style={{display:'inline'}}>Filter</h4>
        </button>
      </div>
    </div>
    </>
  )
}

export default BodyTitle