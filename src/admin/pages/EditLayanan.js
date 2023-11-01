import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Topnav from "../components/Topnav";
import Sidenav from "../components/Sidenav";
import Footer from "../components/Footer";
import axios from "axios";
import Swal from "sweetalert2";

const EditLayanan = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    // const [render, setRender] = useState(false);
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/poliklinik/${id}`)
            .then(response => {
                setData(response.data);
                console.log(response)
            })
            .catch(error => {
                // Handle error, misalnya dengan menavigasi atau menampilkan pesan error
                console.log(error)
            });
    }, [id]);


    const handleUpdate = () => {
        axios.put(`http://127.0.0.1:8000/api/v1/poliklinik/${id}`, data)
            .then(response => {
                console.log(response)
                Swal.fire("Sukses", "Data Berhasil di Update", "success");
                // navigate('/admin/layanan')
            })
            .catch(error => {
                if (error.response && error.response.data.errors) {
                    setErrors(error.response.data.errors);
                }
            });
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.nama]: e.target.value
        });
    };

    console.log(data)

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
                                        <h3 className="card-title">Edit Layanan</h3>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={handleUpdate}>
                                            <div className="form-row mt-3">
                                                <label className="col-md-3">Nama Poliklinik <span className='text-danger'>*</span></label>
                                                <input id='poliklinik' name="poliklinik" type="text" onChange={handleChange} value={data.poliklinik} className="form-control col-md-9" />
                                            </div>
                                            <div className="form-row mt-3">
                                                <label className="col-md-3">Kode Poli <span className='text-danger'>*</span></label>
                                                <input id='kode' type="number" name="kode_poli" onChange={handleChange} value={data.kode_poli} className="form-control col-md-9" />
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

export default EditLayanan