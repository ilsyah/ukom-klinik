import React from "react";
import { Link } from "react-router-dom";
import Topnav from "../components/Topnav";
import Sidenav from "../components/Sidenav";
import Footer from "../components/Footer";

const DataDokter = () => {
  return (
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
                    <Link to='/admin/tambah-dokter'>
                      <button className="btn btn-outline-light btn-sm"><i className="fa fa-plus fa-sm"></i> Tambah Dokter</button>
                    </Link>
                  </div>
                  <div
                    className="card-body table-responsive p-0"
                    style={{ height: 400 }}>
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
                        <tr>
                          <td>1</td>
                          <td>John Doe</td>
                          <td>John.Doe@gmial.com</td>
                          <td>Jl.Magersari Blok A no.12</td>
                          <td>
                            <Link to='/admin/edit-dokter' className="btn btn-sm btn-warning mx-1">
                              <i className="fa fa-edit fa-sm"></i>
                            </Link>
                            <Link className="btn btn-sm btn-danger mx-1">
                              <i className="fa fa-trash-alt fa-sm"></i>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>John Doe</td>
                          <td>John.Doe@gmial.com</td>
                          <td>Jl.Magersari Blok A no.12</td>
                          <td>
                            <Link className="btn btn-sm btn-warning mx-1">
                              <i className="fa fa-edit fa-sm"></i>
                            </Link>
                            <Link className="btn btn-sm btn-danger mx-1">
                              <i className="fa fa-trash-alt fa-sm"></i>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>John Doe</td>
                          <td>John.Doe@gmial.com</td>
                          <td>Jl.Magersari Blok A no.12</td>
                          <td>
                            <Link className="btn btn-sm btn-warning mx-1">
                              <i className="fa fa-edit fa-sm"></i>
                            </Link>
                            <Link className="btn btn-sm btn-danger mx-1">
                              <i className="fa fa-trash-alt fa-sm"></i>
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
