import React, { useEffect, useState } from "react";
import Topnav from "../components/Topnav";
import Sidenav from "../components/Sidenav";
import Footer from "../components/Footer";
import { Link, useAsyncError } from "react-router-dom";
import Pagination from "../components/Pagination";
import axios from "axios";

const History = () => {

    const [history, setHistory] = useState([]);
    const [poli, setPoli] = useState([]);
    const [loading, setLoading] = useState(true);

    const [tanggal, setTanggal] = useState('');

    const [search, setSearch] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    // const fetchPoli = () => {
    //     fetch('http://127.0.0.1:8000/api/v1/poliklinik')
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((datapoli) => {
    //             // console.log(datapoli)
    //             setPoli(datapoli);
    //         })
    // }

    const fetchHistory = (page) => {
        axios.get(`http://127.0.0.1:8000/api/v1/history?page=${page}`)
            .then((response) => {
                // return response.json();
                const meta = response.data
                // console.log(response)

                setTotalPage(meta.last_page)
                setLoading(false);
                setHistory(response.data.data);
            })
        // .then((data) => {
        //     // console.log(data)

        // });
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        fetchHistory(currentPage);
        // fetchPoli();
    }, [currentPage]);

    const filterHistory = history.filter(item => item.tanggal.includes(tanggal) && item.nama.includes(search));

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
                                                    value={search}
                                                    onChange={(e) => { setSearch(e.target.value) }}
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
                                        {/* <div className="row px-3 pb-2">
                                            <div className="col-sm-6 col-md-4 col-lg-2 d-flex align-items-center justify-content-start">

                                                <select name="" id="" className="custom-select">
                                                    <option value="">poliklinik*</option>
                                                    {poli.map((item) => (
                                                        <option key={item.id} value={item.id}>{item.poliklinik}</option>
                                                    ))}

                                                </select>
                                                <button className="btn btn-sm btn-outline-light ml-2">View</button>
                                            </div>
                                        </div> */}
                                        <div className="col-md-2 ml-2 mb-2">
                                            <input type="date" value={tanggal} onChange={(e) => { setTanggal(e.target.value) }} className="form-control form-control-sm" />
                                        </div>
                                        <div className="card-body table-responsive p-0"
                                            style={{ height: 400 }}>
                                            {loading ? <h1 className="text-center">Loading bang</h1> : (
                                                <table className="table table-head-fixed text-nowrap text-center">
                                                    <thead>
                                                        <tr>
                                                            {/* <th>No</th> */}
                                                            <th>Nama</th>
                                                            <th>poliklinik</th>
                                                            <th>tanggal</th>
                                                            <th>Penjamin</th>
                                                            <th>#</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {filterHistory.map((item) => (
                                                            <tr key={item.id}>
                                                                {/* <td>1.</td> */}
                                                                <td>{item.nama}</td>
                                                                <td>{item.poliklinik.poliklinik}</td>
                                                                <td>{item.tanggal}</td>
                                                                <td>{item.penjamin}</td>
                                                                <td>
                                                                    <Link to={`/admin/detail-pasien/${item.id}`} className="btn btn-sm btn-warning mx-1">
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
                                            <Pagination totalPages={totalPage} handleClick={handlePageClick} />
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
