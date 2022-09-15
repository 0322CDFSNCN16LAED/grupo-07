export default function Accessorie({
  id,
  type,
  description,
  price,
  discount,
  brand,
}) {
  return (
    <tr>
      <td>{id}</td>
      <td>{type}</td>
      <td>{description}</td>
      <td>{price}</td>
      <td>{discount}</td>
      <td>{brand ? brand.name : "No definido"}</td>
    </tr>
  );
}
