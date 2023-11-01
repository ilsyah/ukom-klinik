import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Topnav from "../components/Topnav";
import Sidenav from "../components/Sidenav";
import Footer from "../components/Footer";
import axios from "axios";

const DataDokter = () => {
  const [dokter, setDokter] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDokter = () => {
    fetch("http://127.0.0.1:8000/api/v1/dokter")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data)
        setLoading(false);
        setDokter(data);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/v1/dokter/${id}`)
      .then((response) => {
        if (response.status === 200) {
          // Data berhasil dihapus, lakukan sesuatu
          console.log("Data berhasil dihapus");
        } else {
          // Tampilkan pesan error atau tangani error sesuai kebutuhan
          console.error("Gagal menghapus data");
        }
      });
  };

  useEffect(() => {
    fetchDokter();
  }, []);

  return (
    // <h1>y</h1>
    <div className="wrapper">
      <Topnav />
      <Sidenav />
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card mt-4">
                  <div className="card-header">
                    <h3 className="card-title">Data Dokter</h3>
                    <div className="card-tools">
                      <div
                        className="input-group input-group-sm"
                        style={{ width: 150 }}>
                        <input
                          type="text"
                          name="table_search"
                          className="form-control float-right"
                          placeholder="Search"
                        />
                        <div className="input-group-append">
                          <button type="submit" className="btn btn-default">
                            <i className="fas fa-search" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="col-lg-3 px-3 mb-3">
                    <Link to="/admin/tambah-dokter">
                      <button className="btn btn-outline-light btn-sm">
                        <i className="fa fa-plus fa-sm"></i> Tambah Dokter
                      </button>
                    </Link>
                  </div>
                  <div
                    className="card-body table-responsive p-0"
                    style={{ height: 400 }}>
                    {loading ? (
                      <h1 className="text-center">Loading bang</h1>
                    ) : (
                      <table className="table table-head-fixed text-nowrap text-center">
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Email</th>
                            <th>Alamat</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {dokter.map((item) => (
                            <tr key={item.id}>
                              <td>1</td>
                              <td>{item.nama}</td>
                              <td>{item.email}</td>
                              <td>{item.alamat}</td>
                              <td>
                                <Link
                                  to={`/admin/edit-dokter/${item.id}`}
                                  className="btn btn-sm btn-warning mx-1">
                                  <i className="fa fa-edit fa-sm"></i>
                                </Link>
                                <button
                                  onClick={() => {
                                    handleDelete(item.id);
                                  }}
                                  className="btn btn-sm btn-danger mx-1">
                                  <i className="fa fa-trash-alt fa-sm"></i>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                  <div className="card-footer">
                    <div className="card-tools">
                      <ul className="pagination pagination-sm float-right">
                        <li className="page-item">
                          <a className="page-link" href="#">
                            «
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            »
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
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

export default DataDokter;
