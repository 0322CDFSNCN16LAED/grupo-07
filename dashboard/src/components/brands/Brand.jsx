import React from "react";

function Brand(props) {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card text-white bg-dark  shadow">
        <div className="card-body">{props.name}</div>
      </div>
    </div>
  );
}
export default Brand;
