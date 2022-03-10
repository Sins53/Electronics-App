import React, { useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
// import FilteredPage from "../../Components/Extra/FilteredPage";

const FilterModal = (props) => {
  const { item, setFilterData } = props;
  const [displayModal, setDisplayModal] = useState("none");
  // var modal = document.getElementById("myModal");

  const unique = [...new Set(item.map((item) => item.category[1]))];

  // console.log(productList)
  const modal = useRef(null);
  const min = useRef(null);
  const max = useRef(null);
  const category = useRef(null);

  const display = () => {
    setDisplayModal("block");
  };
  const close = () => {
    setDisplayModal("none");
  };
  window.onclick = function (event) {
    if (event.target === modal.current) {
      setDisplayModal("none");
    }
  };
  const setFilter = () => {
    // console.log(modal.current)
    var fmin = min.current.value;
    var fmax = max.current.value;
    var fc = category.current.value;
    setFilterData({ min: fmin, max: fmax, category: fc });
  };
  const resetFilter = () => {
    min.current.value = "";
    max.current.value = "";
    category.current.value = 0;
    setFilterData({min: 1,
      max: 1000000000,
      category: 0,})
  };
  return (
    <>
      <button className="btn btn-primary" onClick={display}>
        <FaFilter />
        <h4 className="Filter-btn" style={{ display: "inline" }}>
          Filter
        </h4>
      </button>

      {/* <FilteredPage /> */}
      <div
        ref={modal}
        id="myModal"
        className="Custom-modal text-start"
        style={{ display: displayModal }}
      >
        <div className="Custom-modal-content">
          <div className="modal-header Custom-modal-header">
            <div>
              <h3 className="modal-title" id="cartModalLabel">
                Filter
              </h3>
            </div>
            <button
              type="button"
              className="btn-close"
              onClick={close}
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <label>Price</label>
              <div className="row">
                <div className="col">
                  <input ref={min} type="number" placeholder="Min" />
                </div>
                {/* <div className="col">-</div> */}
                <div className="col">
                  <input ref={max} type="number" placeholder="Max" />
                </div>
              </div>
              <label> Date</label>
              <div>
                <input type="date" />
              </div>
              <label> Category</label>
              <div>
                <select ref={category} name="Choose" placeholder="Choose ">
                  <option value={0}>Display All</option>
                  {unique.map((item) => {
                    return (
                      <option value={unique.indexOf(item) + 1} key={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              onClick={resetFilter}
            >
              Reset
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={setFilter}
            >
              Filter
            </button>
          </div>
          <div className="modal-note">
            <h3>Only Filter By category works..</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterModal;
