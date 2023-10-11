import React from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  return (
    <nav className="main-header navbar navbar-expand navbar-dark">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars" />
          </a>
        </li>
      </ul>
      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        {/* Notifications Dropdown Menu */}
        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="">
            <i className="far fa-user-circle mr-2" />
            Dokter
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <div className="dropdown-divider" />
            <Link to="" className="dropdown-item text-danger">
              <i className="fas fa-arrow-left mr-2" /> LogOut
            </Link>
            <div className="dropdown-divider" />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Topnav;
