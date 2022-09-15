import MiniCard from "./MiniCard";
import LastProduct from "./LastProduct";
import BrandsInDb from "./brands/brandsInDb";
import { useEffect } from "react";
import { useState } from "react";

const EXPRESS_HOST = "http://localhost:3001";

export default function Dashboard() {
  const [tablesCount, setTablesCount] = useState(["Cargando...", 0]);
  async function fetchTablesCount() {
    const response = await fetch(`${EXPRESS_HOST}/api/tablas`);
    const result = await response.json();
    const tablesCount = result.meta.total;

    setTablesCount(tablesCount);
  }
  useEffect(() => {
    fetchTablesCount();
  }, []);

  const [usersCount, setUsersCount] = useState(["Cargando...", 0]);
  async function fetchUsersCount() {
    const response = await fetch(`${EXPRESS_HOST}/api/usuarios`);
    const result = await response.json();
    const usersCount = result.count;

    setUsersCount(usersCount);
  }
  useEffect(() => {
    fetchUsersCount();
  }, []);

  const [accessoriesCount, setAccessoriesCount] = useState(["Cargando...", 0]);
  async function fetchAccessoriesCount() {
    const response = await fetch(`${EXPRESS_HOST}/api/accesorios`);
    const result = await response.json();
    const accessoriesCount = result.meta.total;

    setAccessoriesCount(accessoriesCount);
  }
  useEffect(() => {
    fetchAccessoriesCount();
  }, []);

  const miniCards = [
    {
      title: "Total de usuarios",
      value: usersCount,
    },
    {
      title: "Total de tablas",
      value: tablesCount,
    },
    {
      title: "Total de accesorios",
      value: accessoriesCount,
    },
  ];
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
      </div>

      {/* <!-- Content Row Movies--> */}
      <div className="row">
        {/* <!-- Total usuarios --> */}
        {miniCards.map((data) => {
          return <MiniCard {...data} key={data.title} />;
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
