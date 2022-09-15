import React from "react";

function tableDetailInDb(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.type}</td>
      <td>{props.description}</td>
      <td>{props.price}</td>
      <td>{props.discount}</td>
      <td>{props.table_length}</td>
      <td>{props.table_expertise}</td>
    </tr>
  );
}
export default tableDetailInDb;
