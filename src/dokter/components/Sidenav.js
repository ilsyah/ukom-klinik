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
              <Link to="/dokter/dashboard" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dokter/jadwal" className="nav-link">
                <i className="nav-icon fas fa-calendar" />
                <p>Jadwal</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dokter/pasien" className="nav-link">
                <i className="nav-icon fas fa-users" />
                <p>Antri Pasien</p>
              </Link>
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
