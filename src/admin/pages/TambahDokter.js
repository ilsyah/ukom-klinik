import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Topnav from "../components/Topnav";
import Sidenav from "../components/Sidenav";
import Footer from "../components/Footer";
import Swal from "sweetalert2";
import axios from "axios";

const TambahDokter = () => {

    const [poli, setPoli] = useState([]);

    // const [validator, setValidator] = useState([]);

    // Fetch Data 

    const fetchPoli = () => {
        fetch('http://127.0.0.1:8000/api/v1/data-poliklinik')
            .then((response) => {
                return response.json();
            })
            .then((datapoli) => {
                // console.log(datapoli)
                setPoli(datapoli);
            });
    };

    // Post Data 
    const [formData, setFormData] = useState({
        nama: "",
        email: "",
        password: "",
        alamat: "",
        poliklinik_id: ""
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
        // try {
        //     const response = await axios.post('http://127.0.0.1:8000/api/v1/dokter', formData);
        //     console.log(response)
        //     if (response.ok) {
        //         //Success
        //         setError({});
        //         setFormData({ nama: '', email: '', password: '', alamat: '', poliklinik_id: 'pilih poliklinik' })
        // Swal.fire("Sukses", "Data Berhasil Ditambahkan", "success");
        // navigate('/admin/data-dokter')
        //     } else {
        //         const errorData = await response.json();
        //         // Menampilkan pesan kesalahan pada input yang sesuai
        //         setError(errorData.error);
        //     }
        // } catch (error) {
        //     // Menampilkan pesan kesalahan umum jika terjadi kesalahan saat Fetch
        //     setError({ general: 'Terjadi kesalahan: ' + error.message });
        //     setValidator(error.response.data);
        // }
        await axios.post('http://127.0.0.1:8000/api/v1/dokter', formData)
            .then(response => {
                console.log(response.data)
                Swal.fire("Sukses", "Data Berhasil Ditambahkan", "success");
                navigate('/admin/data-dokter')
            })
            .catch(error => {
                // console.log(error.response.data.errors)
                setError(error.response.data.errors)
            })
    }

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
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-row mt-3">
                                                <label className="col-md-3">Nama <span className='text-danger'>*</span></label>
                                                <input id='nama' name="nama" type="text" placeholder='Nama Dokter' value={formData.nama} onChange={handleChange} className="form-control col-md-9" />
                                                {/* {validator.nama && (
                                                    <div className="alert alert-danger">
                                                        {validator.nama[0]}
                                                    </div> */}
                                                {error.nama && <p style={{ color: 'red' }}>{error.nama}</p>}
                                            </div>
                                            {/* {error.nama} */}
                                            <div className="form-row mt-3">
                                                <label className="col-md-3">Email <span className='text-danger'>*</span></label>
                                                <input id='email' name="email" type="email" placeholder='Email Dokter' value={formData.email} onChange={handleChange} className="form-control col-md-9" />
                                                {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
                                            </div>
                                            <div className="form-row mt-3">
                                                <label className="col-md-3">Poliklinik <span className='text-danger'>*</span></label>
                                                <select className="custom-select col-md-9" name="poliklinik_id" onChange={handleChange} id="poliklinik">
                                                    <option value="">Pilih Poliklinik</option>
                                                    {poli.map((item) => (
                                                        <option key={item.id} value={item.id}>{item.poliklinik}</option>
                                                    ))}
                                                </select>
                                                {error.poliklinik_id && <p style={{ color: 'red' }}>{error.poliklinik_id}</p>}
                                            </div>
                                            <div className="form-row mt-3">
                                                <label className="col-md-3">Alamat <span className='text-danger'>*</span></label>
                                                <input id='alamat' name="alamat" type="text" placeholder='Alamat Dokter' value={formData.alamat} onChange={handleChange} className="form-control col-md-9" />
                                                {error.alamat && <p style={{ color: 'red' }}>{error.alamat}</p>}
                                            </div>
                                            <div className="form-row mt-3">
                                                <label className="col-md-3">Password <span className='text-danger'>*</span></label>
                                                <input id='password' name="password" type="password" placeholder='Password' value={formData.password} onChange={handleChange} className="form-control col-md-9" />
                                                {error.password && <p style={{ color: 'red' }}>{error.password}</p>}
                                            </div>
                                            {/* <div className="form-row mt-3">
                                                <label className="col-md-3">Re-Password <span className='text-danger'>*</span></label>
                                                <input id='re-password' type="password" placeholder='Re-Password' className="form-control col-md-9" />
                                            </div> */}
                                            <div className="row mt-5 d-flex justify-content-center">
                                                <button type="submit" className="btn btn-outline-light">Simpan <i className='fa fa-check'></i></button>
                                            </div>
                                        </form>
                                        {error.general && <p style={{ color: 'red' }}>{error.general}</p>}
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