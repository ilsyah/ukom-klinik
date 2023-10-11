import React from "react";
import { Link } from "react-router-dom";
import Topnav from "../components//Topnav";
import Sidenav from "../components/Sidenav";
import Footer from "../components//Footer";

const Dashboard = () => {
  return (
    <div className="wrapper">
      <Topnav />
      <Sidenav />
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-6 mt-3">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>4</h3>
                    <h4>Data Dokter</h4>
                  </div>
                  <div className="icon">
                    <i className="fa fa-id-badge" />
                  </div>
                  <Link to="/admin/data-dokter" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-6 mt-3">
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>5</h3>
                    <h4>Data Layanan</h4>
                  </div>
                  <div className="icon">
                    <i className="fa fa-heartbeat" />
                  </div>
                  <Link to="/admin/data-layanan" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-6 mt-3">
                <div className="small-box bg-warning text-white">
                  <div className="inner">
                    <h3>7</h3>
                    <h4>Antrian</h4>
                  </div>
                  <div className="icon">
                    <i className="fa fa-users" />
                  </div>
                  <Link
                    to="/admin/antrian"
                    className="small-box-footer text-white">
                    More info <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-6 mt-3">
                {/* small box */}
                <div className="small-box bg-danger">
                  <div className="inner">
                    <h3>65</h3>
                    <h4>History</h4>
                  </div>
                  <div className="icon">
                    <i className="fa fa-archive" />
                  </div>
                  <Link to="/admin/history" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
