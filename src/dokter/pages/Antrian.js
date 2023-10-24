import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Topnav from "../components/Topnav";
import Sidenav from "../components/Sidenav";
import Footer from "../components/Footer";

const Antrian = () => {

  const [antrian, setAntrian] = useState([]);
  const [loading, setLoading] = useState(true)

  const fetchAntrian = () => {
    fetch('http://127.0.0.1:8000/api/v1/pelayanan')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data)
        setLoading(false)
        setAntrian(data);
      });
  };

  useEffect(() => {
    fetchAntrian();
  }, [])

  return (
    <div className="wrapper">
      <Topnav />
      <Sidenav />
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid">
            {loading ? <h1 className="text-center">Loading bang</h1> : (
              <div className="row">
                {antrian.map((item) => (
                  <div key={item.id} className="col-md-3">
                    <div className="card card-primary bg-white mt-3 collapsed-card">
                      <div className="card-header">
                        <h3 className="card-title">No Antri : {item.antrian}</h3>
                        <div className="card-tools">
                          <button
                            type="button"
                            className="btn btn-tool"
                            data-card-widget="collapse">
                            <i className="fas fa-plus" />
                          </button>
                        </div>
                      </div>
                      <div className="card-body">
                        <table className="table table-sm text-center">
                          <thead>
                            <tr>
                              <th>Nama</th>
                              <th>#</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{item.nama}</td>
                              <td>
                                <Link to="/dokter/detail-antrian" className="btn btn-xs btn-warning">
                                  Detail
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div >
      <Footer />
    </div >
  );
};

export default Antrian;
