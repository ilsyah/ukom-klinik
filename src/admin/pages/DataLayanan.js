import React from "react";
import { Link } from "react-router-dom";
import Topnav from "../components/Topnav";
import Sidenav from "../components/Sidenav";
import Footer from "../components/Footer";

const DataLayanan = () => {
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
                                        <h3 className="card-title">Data Layanan</h3>
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
                                    <div
                                        className="card-body table-responsive p-0"
                                        style={{ height: 400 }}>
                                        <table className="table table-head-fixed text-nowrap text-center">
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Poliklinik</th>
                                                    <th>Kode Poli</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Umum</td>
                                                    <td>001</td>
                                                    <td>
                                                        <Link className="btn btn-sm btn-danger">
                                                            Delete
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Jiwa</td>
                                                    <td>002</td>
                                                    <td>
                                                        <Link className="btn btn-sm btn-danger">
                                                            Delete
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Jantung</td>
                                                    <td>003</td>
                                                    <td>
                                                        <Link className="btn btn-sm btn-danger">
                                                            Delete
                                                        </Link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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

export default DataLayanan;
