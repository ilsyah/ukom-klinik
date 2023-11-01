import React from 'react'
import { Link } from "react-router-dom";
import Topnav from "../components/Topnav";
import Sidenav from "../components/Sidenav";
import Footer from "../components/Footer";

const DetailHistory = () => {
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
                                        <h3 className="card-title">Detail History</h3>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-row mt-3">
                                                <label className='col-md-3'>Nama Pasien</label>
                                                <span>Nama_Pasien</span>
                                            </div>
                                            <div className="form-row mt-3">
                                                <label className='col-md-3'>NIK</label>
                                                <span>XXXXXXXXXXXX</span>
                                            </div>
                                            <div className="form-row mt-3">
                                                <label className='col-md-3'>Tgl Periksa</label>
                                                <span>Tgl / Bln / Thn</span>
                                            </div>
                                            <div className="form-row mt-3">
                                                <label className='col-md-3'>Poliklinik</label>
                                                <span>Nama_Poliklinik</span>
                                            </div>
                                            <div className="form-row mt-3">
                                                <label className='col-md-3'>Penjamin</label>
                                                <span>Nama_Penjamin</span>
                                            </div>
                                        </form>
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