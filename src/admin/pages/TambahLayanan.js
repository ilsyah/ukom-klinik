import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Topnav from "../components/Topnav";
import Sidenav from "../components/Sidenav";
import Footer from "../components/Footer";

const TambahLayanan = () => {
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
                                    <Link to='/admin/data-layanan'>
                                        <button className="btn btn-outline-light btn-sm"><i className='fa fa-arrow-left'></i> Batal</button>
                                    </Link>
                                </div>
                                <div className="card mt-4">
                                    <div className="card-header">
                                        <h3 className="card-title">Tambah Layanan</h3>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-row mt-3">
                                                <label className="col-md-3">Nama Poliklinik <span className='text-danger'>*</span></label>
                                                <input id='poliklinik' type="text" placeholder='Nama Poliklinik' className="form-control col-md-9" />
                                            </div>
                                            <div className="form-row mt-3">
                                                <label className="col-md-3">Kode Poli <span className='text-danger'>*</span></label>
                                                <input id='kode' type="number" placeholder='Kode Poliklinik' className="form-control col-md-9" />
                                            </div>
                                        </form>
                                        <div className="row mt-5 d-flex justify-content-center">
                                            <button className="btn btn-outline-light">Simpan <i className='fa fa-check'></i></button>
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
    )
}

export default TambahLayanan