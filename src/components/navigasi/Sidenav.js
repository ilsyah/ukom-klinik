import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-klinik.png";

const Sidenav = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <Link to="" className="brand-link">
        <img
          src={logo}
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: "0.8" }}
        />
        <span className="brand-text font-weight-light fw-bold">
          KlinikSehat
        </span>
      </Link>
      {/* Sidebar */}
      <div className="sidebar">
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false">
            <li className="nav-item">
              <Link to="/admin/dashboard" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/antrian" className="nav-link">
                <i className="nav-icon fas fa-users" />
                <p>Antrian</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link">
                <i className="nav-icon fas fa-book" />
                <p>
                  Data-Data
                  <i className="fas fa-angle-left right" />
                </p>
              </Link>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/admin/data-dokter" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Data Dokter</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/profile.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Data Layanan</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/e-commerce.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>E-commerce</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="pages/widgets.html" className="nav-link">
                <i className="nav-icon fas fa-archive" />
                <p>History</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidenav;
