import { Link } from "react-router-dom";
export default function Table({ id, type, price, discount, brand }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{type}</td>
      <td>{price}</td>
      <td>{discount}</td>
      <td>{brand ? brand.name : "No definido"}</td>
      <td>
        <Link to={`/tablas/${id}`}>Detalle de tabla</Link>
      </td>
    </tr>
  );
}
