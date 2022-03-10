import React from "react";

import FilterModal from "../FilterModal";

const BodyTitle = (props) => {
  const {item, setFilterData} = props;
  return (
    <>
      <div className="row justify-content-between">
        <div className="col-2">
          <h3>Products</h3>
        </div>
        <div className="col-2 text-end">         
          <FilterModal 
          item = {item}
          setFilterData = {setFilterData}
          />
        </div>
      </div>
    </>
  );
};

export default BodyTitle;