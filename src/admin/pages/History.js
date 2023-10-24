import React, { useEffect, useState } from "react";
import Topnav from "../components/Topnav";
import Sidenav from "../components/Sidenav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const History = () => {

    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchHistory = () => {
        fetch('http://127.0.0.1:8000/api/v1/history')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // console.log(data)
                setLoading(false);
                setHistory(data);
            });
    };

    useEffect(() => {
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
                            <div className="col-12">
                                <div className="card mt-4">
                                    <div className="card-header">
                                        <h3 className="card-title">History Pasien</h3>
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
                                    <div className="card-body p-0">
                                        <div className="row px-3 pb-2">
                                            <div className="col-sm-6 col-md-4 col-lg-2 d-flex align-items-center justify-content-start">
                                                <select name="" id="" className="custom-select">
                                                    <option value="">poliklinik*</option>
                                                    <option value="nama_dokter">nama dokter</option>
                                                    <option value="nama_dokter">nama dokter</option>
                                                    <option value="nama_dokter">nama dokter</option>
                                                </select>
                                                <button className="btn btn-sm btn-outline-light ml-2">View</button>
                                            </div>
                                        </div>
                                        <div className="card-body table-responsive p-0"
                                            style={{ height: 400 }}>
                                            {loading ? <h1 className="text-center">Loading bang</h1> : (
                                                <table className="table table-head-fixed text-nowrap text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>No</th>
                                                            <th>Nama</th>
                                                            <th>poliklinik</th>
                                                            <th>Penjamin</th>
                                                            <th>#</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {history.map((item) => (
                                                            <tr key={item.id}>
                                                                <td>1.</td>
                                                                <td>{item.nama}</td>
                                                                <td>{item.poliklinik.poliklinik}</td>
                                                                <td>{item.penjamin}</td>
                                                                <td>
                                                                    <Link to='/admin/detail-pasien' className="btn btn-sm btn-warning mx-1">
                                                                        <i className="fa fa-info fa-sm"></i>
                                                                    </Link>
                                                                </td>
                                                                <td>
                                                                    <span className="badge bg-success">Selesai</span>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            )}
                                        </div>
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
