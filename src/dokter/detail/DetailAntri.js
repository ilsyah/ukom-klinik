import React from "react";
import { Link } from "react-router-dom";
import Topnav from "../components/Topnav";
import Sidenav from "../components/Sidenav";
import Footer from "../components/Footer";

const DetailAntrian = () => {
    return (
        <div className="wrapper">
            <Topnav />
            <Sidenav />
            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid p-5">
                        <div className="mb-3">
                            <h5>Detail Antrian</h5>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <form>
                                    <div className="form-row mt-3">
                                        <label className="col-md-3">Nama Lengkap</label>
                                        <span>Nama Pasien</span>
                                    </div>
                                    <div className="form-row mt-3">
                                        <label className="col-md-3">NIK</label>
                                        <span>XXXXXXXXXXXXXX</span>
                                    </div>
                                    <div className="form-row mt-3">
                                        <label className="col-md-3">Poliklinik</label>
                                        <span>Nama Poliklinik</span>
                                    </div>
                                    <div className="form-row mt-3">
                                        <label className="col-md-3">Tanggal</label>
                                        <span>Tgl/Bln/Thn : J.M</span>
                                    </div>
                                    <div className="form-row mt-3">
                                        <label className="col-md-3">Penjamin</label>
                                        <span>Penjamin</span>
                                    </div>
                                    <div className="form-row mt-3">
                                        <label className="col-md-3">No Antrian</label>
                                        <span>XX</span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default DetailAntrian;
