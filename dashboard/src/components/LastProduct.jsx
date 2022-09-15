import ultimoProducto from "../assets/images/ultimo-producto.jpg";
import BigCard from "./BigCard";

export default function LastProduct() {
  return (
    <BigCard title="Último producto">
      <div className="text-center">
        <img
          className="img-fluid px-3 px-sm-4 mt-3 mb-4"
          style={{ width: "40rem" }}
          src={ultimoProducto}
          alt="ultimo producto"
        />
      </div>
      <p>
        El “Gun” es un diseño de tablas de surf creado exclusivamente para olas
        grandes y la mayoría de los surfistas nunca surfean con estas tablas en
        otras condiciones que no sea ola tamaño XL. Estamos hablando de olas de
        6 o quizás 12 metros de altura (La ola más grande surfeada fué en Nazaré
        (Portugal) con 24,3 metros de altura por Rodrigo Coxa). En caso de que
        seas un valiente de olas grandes te contaremos un poco sobre ellas. Son
        tablas largas desde 6’6 hasta 10 pies.
      </p>
      <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
        View movie detail
      </a>
    </BigCard>
  );
}
