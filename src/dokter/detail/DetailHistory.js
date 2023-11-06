import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import Topnav from "../components/Topnav";
import Sidenav from "../components/Sidenav";
import Footer from "../components/Footer";
import axios from 'axios';

const DetailHistory = () => {

    const { id } = useParams();
    const [data, setData] = useState([]);

    const fetchHistory = () => {
        axios.get(`http://127.0.0.1:8000/api/v1/history/${id}`)
            .then(response => {
                setData([response.data]);
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchHistory();
    }, [])

    return (
        <div className="wrapper">
            <Topnav />
            <Sidenav />
            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="row mt-2 mx-2">
                                    <Link to='/dokter/history'>
                                        <button className="btn btn-outline-light btn-sm"><i className='fa fa-arrow-left'></i> Batal</button>
                                    </Link>
                                </div>
                                <div className="card mt-4">
                                    <div className="card-header">
                                        <h3 className="card-title">Detail Pasien</h3>
                                    </div>
                                    <div className="card-body">
                                        {data.map((item) => (
                                            <form key={item.id}>
                                                <div className="form-row mt-3">
                                                    <label className='col-md-3'>Nama Pasien</label>
                                                    <span>{item.nama}</span>
                                                </div>
                                                <div className="form-row mt-3">
                                                    <label className='col-md-3'>NIK</label>
                                                    <span>{item.nik}</span>
                                                </div>
                                                <div className="form-row mt-3">
                                                    <label className='col-md-3'>Tgl Periksa</label>
                                                    <span>{item.tanggal}</span>
                                                </div>
                                                <div className="form-row mt-3">
                                                    <label className='col-md-3'>Poliklinik</label>
                                                    <span>{item.poliklinik.poliklinik}</span>
                                                </div>
                                                <div className="form-row mt-3">
                                                    <label className='col-md-3'>Nama Dokter</label>
                                                    <span>{item.dokter.nama}</span>
                                                </div>
                                                <div className="form-row mt-3">
                                                    <label className='col-md-3'>Penjamin</label>
                                                    <span>{item.penjamin}</span>
                                                </div>
                                            </form>

                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default DetailHistory