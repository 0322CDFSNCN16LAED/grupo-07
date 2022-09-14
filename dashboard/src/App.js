import "./App.css";

import Sidebar from "./components/Sidebar";
import MiniCard from "./components/MiniCard";
import MediumCard from "./components/MediumCard";
import BigCard from "./components/BigCard";

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
function App() {
  return (
    <div id="wrapper">
      <Sidebar />

      {/* <!-- Content Row Top --> */}
      <div className="container-fluid">
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

        {/* <!-- End movies in Data Base --> */}

        {/* <!-- Content Row Last Movie in Data Base --> */}
        <div className="row">
          {/* <!-- Last Movie in DB --> */}
          <BigCard />
          {/* <!-- End content row last movie in Data Base -->
           */}
          {/* <!-- Genres in DB --> */}
          <MediumCard />
          {/* <!-- Footer --> */}
          <footer className="sticky-footer bg-white w-100">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Dashboard 2021</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
