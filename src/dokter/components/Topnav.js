import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Topnav = () => {
  const [dokter, setDokter] = useState({});

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const fetchData = async () => {
    await axios
      .post(`http://127.0.0.1:8000/api/is-auth?token=${token}`)
      .then((response) => {
        // console.log(response.data);
        setDokter(response.data.user);
      });
  };

  useEffect(() => {
    if (!token) {
      navigate("/");
    }

    fetchData();
  }, []);

  const logoutHandler = async () => {
    await axios
      .post(`http://127.0.0.1:8000/api/is-auth?token=${token}`)
      .then(() => {
        localStorage.removeItem("token");

        navigate("/");
      });
  };

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
            {dokter.nama}
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <div className="dropdown-divider" />
            <button
              onClick={logoutHandler}
              className="dropdown-item text-danger">
              <i className="fas fa-arrow-left mr-2" /> LogOut
            </button>
            <div className="dropdown-divider" />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Topnav;
