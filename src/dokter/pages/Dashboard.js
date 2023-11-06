import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Topnav from "../components//Topnav";
import Sidenav from "../components/Sidenav";
import Footer from "../components//Footer";
import axios from "axios";

const Dashboard = () => {

  const [dokter, setDokter] = useState([]);
  const jumlahDokter = dokter.length;

  const [layanan, setLayanan] = useState([]);
  const jumlahLayanan = layanan.length;

  const [antrian, setAntrian] = useState([]);
  const jumlahAntrian = antrian.length;

  const [history, setHistory] = useState([]);
  const jumlahHistory = history.length;

  const fetchDokter = () => {
    axios.get(`http://127.0.0.1:8000/api/v1/data-dokter`)
      .then(response => {
        // console.log(response.data);
        setDokter(response.data);
      })
  }

  const fetchLayanan = () => {
    axios.get(`http://127.0.0.1:8000/api/v1/data-poliklinik`)
      .then(response => {
        // console.log(response.data);
        setLayanan(response.data);
      })
  }

  const fetchAntrian = () => {
    axios.get(`http://127.0.0.1:8000/api/v1/pelayanan`)
      .then(response => {
        // console.log(response.data);
        setAntrian(response.data);
      })
  }

  const fetchHistory = () => {
    axios.get(`http://127.0.0.1:8000/api/v1/data-history`)
      .then(response => {
        // console.log(response.data.data);
        setHistory(response.data);
      })
  }

  useEffect(() => {
    fetchDokter();
    fetchLayanan();
    fetchAntrian();
    fetchHistory();
  }, []);

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
                    <h3>{jumlahDokter}</h3>
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
                    <h3>{jumlahLayanan}</h3>
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
                    <h3>{jumlahAntrian}</h3>
                    <h4>Antrian</h4>
                  </div>
                  <div className="icon">
                    <i className="fa fa-users" />
                  </div>
                  <Link
                    to="/dokter/antrian"
                    className="small-box-footer text-white">
                    More info <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-6 mt-3">
                {/* small box */}
                <div className="small-box bg-danger">
                  <div className="inner">
                    <h3>{jumlahHistory}</h3>
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
