import React from "react";

const Validation = (props) => {
  const { errors, name } = props;
  return <>{errors && errors[name] && <small className="text-warning m-1">{errors[name]}</small>}</>;
};

export default Validation;
