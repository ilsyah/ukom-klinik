import React from "react";
import Topnav from "../components/Topnav";
import Sidenav from "../components/Sidenav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const History = () => {
  return (
    <div className="wrapper">
      <Topnav />
      <Sidenav />
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card mt-3">
                  <div className="card-header">
                    <h3 className="card-title">History Pasien</h3>
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
                  {/* /.card-header */}
                  <div className="card-body p-0">
                    <table className="table text-center">
                      <thead>
                        <tr>
                          <th style={{ width: 10 }}>No</th>
                          <th>Nama</th>
                          <th>#</th>
                          <th style={{ width: 40 }}>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1.</td>
                          <td>Dicky Ilyasyah</td>
                          <td>
                            <Link className="btn btn-xs btn-warning col-5">
                              detail
                            </Link>
                          </td>
                          <td>
                            <span className="badge bg-success">Selesai</span>
                          </td>
                        </tr>
                        <tr>
                          <td>2.</td>
                          <td>Dicky Ilyasyah</td>
                          <td>
                            <Link className="btn btn-xs btn-warning col-5">
                              detail
                            </Link>
                          </td>
                          <td>
                            <span className="badge bg-success">Selesai</span>
                          </td>
                        </tr>
                        <tr>
                          <td>3.</td>
                          <td>Dicky Ilyasyah</td>
                          <td>
                            <Link className="btn btn-xs btn-warning col-5">
                              detail
                            </Link>
                          </td>
                          <td>
                            <span className="badge bg-success">Selesai</span>
                          </td>
                        </tr>
                        <tr>
                          <td>4.</td>
                          <td>Dicky Ilyasyah</td>
                          <td>
                            <Link className="btn btn-xs btn-warning col-5">
                              detail
                            </Link>
                          </td>
                          <td>
                            <span className="badge bg-success">Selesai</span>
                          </td>
                        </tr>
                        <tr>
                          <td>5.</td>
                          <td>Dicky Ilyasyah</td>
                          <td>
                            <Link className="btn btn-xs btn-warning col-5">
                              detail
                            </Link>
                          </td>
                          <td>
                            <span className="badge bg-success">Selesai</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* /.card-body */}
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

export default History;
