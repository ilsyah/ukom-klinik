import React, { useEffect, useState } from 'react'
import Topnav2 from './components/Topnav2'
import Footer2 from './components/Footer2';
import Swal from 'sweetalert2';
import { Link, useNavigate, useParams } from "react-router-dom";

const Pendaftaran = () => {

    const { id } = useParams();
    const [nama, setNama] = useState(id);
    const [antrian, setAntrian] = useState([])

    const fetchPoliklinik = () => {
        fetch(`http://127.0.0.1:8000/api/v1/poliklinik/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // console.log(data)
                setNama(data.poliklinik);
            });
    };

    useEffect(() => {
        fetchPoliklinik();
    }, [])

    const fetchPelayanan = () => {
        fetch('http://127.0.0.1:8000/api/v1/pelayanan')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // console.log(data)
                setAntrian(data);
            });
    };

    useEffect(() => {
        fetchPelayanan();
    }, [])


    // Post Data

    const [formData, setFormData] = useState({
        penjamin: '',
        nama: '',
        jk: '',
        tanggal: '',
        nik: '',
        poliklinik_id: id
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

        try {
            const response = await fetch('http://127.0.0.1:8000/api/v1/pelayanan', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                navigate('/')
                setError({});
                setFormData({ penjamin: '', nama: '', jk: '', tanggal: '', nik: '', poliklinik_id: '' });
                Swal.fire('Sukses', 'Data Berhasil', 'success')
            } else {
                const errorData = await response.json();
                setError(errorData.error)
            }
        } catch (error) {
            setError({ general: 'terjadi Kesalahan:' + error.message });
        }
    };

    // const buttonAlert = (e) => {
    //     e.preventDefault()
    //     console.log(e)

    // };



    return (
        <div className="wrapper">
            <Topnav2 />
            <div className="container">
                <div className="my-5">
                    <Link to='/poliklinik'>
                        <button className="btn btn-outline-light mb-3">Cancel</button>
                    </Link>
                    <div className="card">
                        <div className="card-body">
                            <h4>Pendaftaran</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="form-row mt-3">
                                    <label className="col-md-3">Nama Lengkap</label>
                                    <div className="col-md-8">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1"><i className='fa fa-user'></i></span>
                                            <input type="text" name='nama' className="form-control" placeholder="Nama Lengkap" value={formData.nama} onChange={handleChange} aria-label="Username" aria-describedby="basic-addon1" />
                                            {error.nama && <p style={{ color: 'red' }}>{error.nama}</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row mt-3">
                                    <label className="col-md-3">Jenis Kelamin</label>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="jk" id="lk" value="L" checked={formData.jk === 'L'} onChange={handleChange} />
                                        <label className="form-check-label" htmlFor="lk">Laki Laki</label>
                                    </div>

                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="jk" id="pr" value="P" checked={formData.jk === 'P'} onChange={handleChange} />
                                        <label className="form-check-label" htmlFor="pr">Perempuan</label>
                                    </div>
                                </div>
                                {error.jk && <p style={{ color: 'red' }}>{error.jk}</p>}
                                <div className="form-row mt-3">
                                    <label className="col-md-3">TGL</label>
                                    <div className="col-md-8">
                                        <input className='form-control' type="date" name="tanggal" value={formData.tanggal} onChange={handleChange} id="" />
                                        {error.tanggal && <p style={{ color: 'red' }}>{error.tanggal}</p>}
                                    </div>
                                </div>
                                <div className="form-row mt-3">
                                    <label className="col-md-3">Poliklinik</label>
                                    <span>{nama}</span>
                                </div>
                                <div className="form-row mt-3">
                                    <label className="col-md-3">Penjamin</label>
                                    {/* <button className="btn btn-outline-light mr-2">BPJS Kesehatan</button>
                                    <button className="btn btn-outline-light mr-2">Asuransi Lainnya</button> */}
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="penjamin" id="umum" value="umum" checked={formData.penjamin === 'umum'} onChange={handleChange} />
                                        <label className="form-check-label" htmlFor="umum">Umum</label>
                                    </div>

                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="penjamin" id="bpjs" value="bpjs" checked={formData.penjamin === 'bpjs'} onChange={handleChange} />
                                        <label className="form-check-label" htmlFor="bpjs">BPJS</label>
                                    </div>
                                </div>
                                {error.penjamin && <p style={{ color: 'red' }}>{error.penjamin}</p>}
                                <div className="form-row mt-3">
                                    <label className="col-md-3">NIK</label>
                                    <div className="col-md-8">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1"><i className='fa fa-book'></i></span>
                                            <input type="number" name='nik' className="form-control" placeholder="NIK" value={formData.nik} onChange={handleChange} aria-label="Username" aria-describedby="basic-addon1" />
                                            {error.nik && <p style={{ color: 'red' }}>{error.nik}</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center align-item-center mt-4">
                                    <button type='submit' className="btn btn-outline-light">Lanjut <i className='fa fa-check'></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
            <Footer2 />
        </div >

    )
}

export default Pendaftaran