import "./App.css";
import Sidebar from "./components/Sidebar";
import TablesList from "./components/tables/tablesList";
import AccessoriesList from "./components/accessories/accessoriesList";
import TableDetail from "./components/tables/tableDetail";
import Dashboard from "./components/Dashboard";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div id="wrapper">
      {/* <!-- Sidebar --> */}
      <Sidebar />
      {/* <!-- End of Sidebar --> */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          {/* <!-- Content Row Top --> */}
          <div className="container-fluid">
            <Switch>
              <Route path="/" component={Dashboard} exact={true} />
              <Route path="/tablas" component={TablesList} exact={true} />
              <Route path="/accesorios" component={AccessoriesList} />
              <Route path="/tablas/:id" component={TableDetail} />
              <Route component={Dashboard} />
            </Switch>
          </div>
        </div>

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
  );
}

export default App;
