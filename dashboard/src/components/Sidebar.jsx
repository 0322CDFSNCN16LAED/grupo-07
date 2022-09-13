import React from "react";
import logoTakeOff from "../assets/images/logo-take-off-surf.png";

function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/"
      >
        <div className="sidebar-brand-icon">
          <img
            className="w-100"
            height="130px"
            src={logoTakeOff}
            alt="Digital House"
          />
        </div>
      </a>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <a className="nav-link" href="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard - Take Off Surf</span>
        </a>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Acciones</div>

      {/* <!-- Nav Item - Pages --> */}
      <li className="nav-item">
        <a className="nav-link collapsed" href="/">
          <i className="fas fa-fw fa-folder"></i>
          <span>Tablas</span>
        </a>
      </li>

      {/* <!-- Nav Item - Charts --> */}
      <li className="nav-item">
        <a className="nav-link" href="/">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Accesorios</span>
        </a>
      </li>

      {/* <!-- Nav Item - Tables --> */}
      <li className="nav-item">
        <a className="nav-link" href="/">
          <i className="fas fa-fw fa-table"></i>
          <span>Usuarios</span>
        </a>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}

export default Sidebar;
