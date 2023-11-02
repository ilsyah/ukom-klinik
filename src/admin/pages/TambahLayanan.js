import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Topnav from "../components/Topnav";
import Sidenav from "../components/Sidenav";
import Footer from "../components/Footer";
import axios from "axios";
import Swal from "sweetalert2";

const TambahLayanan = () => {

    const [formData, setFormData] = useState({
        poliklinik: '',
        kode_poli: ''
    });

    const navigate = useNavigate();

    const [error, setError] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        // Menghapus pesan kesalahan yang terkait dengan input yang sedang diubah
        setError({
            ...error,
            [e.target.name]: '',
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios
            .post("http://127.0.0.1:8000/api/v1/poliklinik", formData)
            .then((response) => {
                // console.log(response.data);
                Swal.fire("Sukses", "Data Berhasil Ditambahkan", "success");
                navigate("/admin/data-layanan");
            })
            .catch((error) => {
                console.log(error.response.data);
                setError(error.response.data);
            });
    };
    // console.log(error)

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
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-row mt-3">
                                                <label className="col-md-3">Nama Poliklinik <span className='text-danger'>*</span></label>
                                                <input id='poliklinik' name="poliklinik" type="text" placeholder='Nama Poliklinik' value={formData.poliklinik} onChange={handleChange} className="form-control col-md-9" />

                                            </div>
                                            {error.poliklinik && <div className="d-flex justify-content-center alert alert-danger col-5 text-center">{error.poliklinik}</div>}

                                            <div className="form-row mt-3">

                                                <label className="col-md-3">Kode Poli <span className='text-danger'>*</span></label>
                                                <input id='kode' name="kode_poli" type="number" placeholder='Kode Poliklinik' value={formData.kode_poli} onChange={handleChange} className="form-control col-md-9" />

                                            </div>
                                            {error.kode_poli && <div className="d-flex justify-content-center alert alert-danger col-5 text-center">{error.kode_poli}</div>}
                                            <div className="row mt-5 d-flex justify-content-center">
                                                <button type="submit" className="btn btn-outline-light">Simpan <i className='fa fa-check'></i></button>
                                            </div>
                                        </form>
                                        {/* {error.general && <p style={{ color: 'red' }}>{error.general}</p>} */}
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