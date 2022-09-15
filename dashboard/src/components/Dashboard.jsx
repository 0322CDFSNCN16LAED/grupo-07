import MiniCard from "./MiniCard";
import LastProduct from "./LastProduct";
import BrandsInDb from "./brands/brandsInDb";

const miniCards = [
  {
    id: 1,
    title: "Total de usuarios",
    value: 25,
  },
  {
    id: 2,
    title: "Total de productos",
    value: 78,
  },
  {
    id: 3,
    title: "Total de tablas",
    value: 56,
  },
  {
    id: 4,
    title: "Total de accesorios",
    value: 22,
  },
];

export default function Dashboard() {
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
      </div>

      {/* <!-- Content Row Movies--> */}
      <div className="row">
        {/* <!-- Total usuarios --> */}
        {miniCards.map((data) => {
          return <MiniCard {...data} key={data.id} />;
        })}
      </div>

      {/* <!-- Content Row Last Movie in Data Base --> */}
      <div className="row">
        {/* <!-- Last Movie in DB --> */}
        <LastProduct />
        {/* <!-- End content row last movie in Data Base -->
         */}

        {/* <!-- Genres in DB --> */}
        <BrandsInDb />
      </div>
    </>
  );
}
