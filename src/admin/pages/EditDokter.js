import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import Topnav from "../components/Topnav";
import Sidenav from "../components/Sidenav";
import Footer from "../components/Footer";
import axios from 'axios';
import Swal from "sweetalert2";

const EditDokter = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [error, setError] = useState({});
    const [poli, setPoli] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');

    // Fetch Data Poliklinik

    const fetchPoli = () => {
        fetch('http://127.0.0.1:8000/api/v1/poliklinik')
            .then((response) => {
                return response.json();
            })
            .then((datapoli) => {
                // console.log(datapoli)
                setPoli(datapoli);
            });
    };

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/dokter/${id}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error)
            });
        fetchPoli();
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();

        axios.put(`http://127.0.0.1:8000/api/v1/dokter/${id}`, data)
            .then(response => {
                Swal.fire("Sukses", "Data Berhasil di Update", "success");
                navigate('/admin/data-dokter')
            })
            .catch(error => {
                if (error.response && error.response.data.errors) {
                    setError(error.response.data.errors);
                }
            });
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

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
                                        <h3 className="card-title">Edit Dokter</h3>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={handleUpdate}>
                                            <div className="form-row mt-3">
                                                <label className="col-md-3">Nama <span className='text-danger'>*</span></label>
                                                <input id='nama' name='nama' type="text" placeholder='Nama Dokter' onChange={handleChange} value={data.nama || ""} className="form-control col-md-9" />
                                            </div>
                                            <div className="form-row mt-3">
                                                <label className="col-md-3">Email <span className='text-danger'>*</span></label>
                                                <input id='email' name='email' type="email" placeholder='Email Dokter' onChange={handleChange} value={data.email || ""} className="form-control col-md-9" />
                                            </div>
                                            <div className="form-row mt-3">
                                                <label className="col-md-3">Poliklinik <span className='text-danger'>*</span></label>
                                                <select className="custom-select col-md-9" name='poliklinik_klinik' id="poliklinik" onChange={handleChange} value={data.poliklinik_klinik || ""}>
                                                    {poli.map((item) => (
                                                        <option key={item.id} value={item.id} >{item.poliklinik}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="form-row mt-3">
                                                <label className="col-md-3">Alamat <span className='text-danger'>*</span></label>
                                                <input id='alamat' name='alamat' type="text" placeholder='Alamat Dokter' onChange={handleChange} value={data.alamat || ""} className="form-control col-md-9" />
                                            </div>
                                            <div className="row mt-5 d-flex justify-content-center">
                                                <button className="btn btn-outline-light">Simpan <i className='fa fa-check'></i></button>
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

export default EditDokter