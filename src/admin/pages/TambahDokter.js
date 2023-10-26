import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Topnav from "../components/Topnav";
import Sidenav from "../components/Sidenav";
import Footer from "../components/Footer";

const TambahDokter = () => {

    const [poli, setPoli] = useState([]);

    const fetchPoli = () => {
        fetch('http://127.0.0.1:8000/api/v1/poliklinik')
            .then((response) => {
                return response.json();
            })
            .then((datapoli) => {
                console.log(datapoli)
                setPoli(datapoli);
            });
    };

    useEffect(() => {
        fetchPoli();
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
                                <div className="row mt-2 mx-2">
                                    <Link to='/admin/data-dokter'>
                                        <button className="btn btn-outline-light btn-sm"><i className='fa fa-arrow-left'></i> Batal</button>
                                    </Link>
                                </div>
                                <div className="card mt-4">
                                    <div className="card-header">
                                        <h3 className="card-title">Tambah Dokter</h3>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-row mt-3">
                                                <label className="col-md-3">Nama <span className='text-danger'>*</span></label>
                                                <input id='nama' type="text" placeholder='Nama Dokter' className="form-control col-md-9" />
                                            </div>
                                            <div className="form-row mt-3">
                                                <label className="col-md-3">Email <span className='text-danger'>*</span></label>
                                                <input id='email' type="email" placeholder='Email Dokter' className="form-control col-md-9" />
                                            </div>
                                            <div className="form-row mt-3">
                                                <label className="col-md-3">Poliklinik <span className='text-danger'>*</span></label>
                                                <select className="custom-select col-md-9" id="poliklinik">
                                                    <option value="">Pilih Poliklinik</option>
                                                    {poli.map((item) => (
                                                        <option key={item.id} value={item.id}>{item.poliklinik}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="form-row mt-3">
                                                <label className="col-md-3">Alamat <span className='text-danger'>*</span></label>
                                                <input id='alamat' type="text" placeholder='Alamat Dokter' className="form-control col-md-9" />
                                            </div>
                                            <div className="form-row mt-3">
                                                <label className="col-md-3">Password <span className='text-danger'>*</span></label>
                                                <input id='password' type="password" placeholder='Password' className="form-control col-md-9" />
                                            </div>
                                            <div className="form-row mt-3">
                                                <label className="col-md-3">Re-Password <span className='text-danger'>*</span></label>
                                                <input id='re-password' type="password" placeholder='Re-Password' className="form-control col-md-9" />
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

export default TambahDokter