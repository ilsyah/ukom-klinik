import React, { useEffect, useState } from 'react'
import Topnav from "../components/Topnav";
import Sidenav from "../components/Sidenav";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

const DetailDokter = () => {

    const { id } = useParams();

    const [tanggal, setTanggal] = useState('');

    const [data, setData] = useState([]);
    const [pasien, setPasien] = useState([]);

    const filterData = pasien.filter(item => item.tanggal.includes(tanggal));

    const jumlahPasien = filterData.length;


    const fetchDokter = () => {
        axios.get(`http://127.0.0.1:8000/api/v1/dokter/${id}`)
            .then(response => {
                setData([response.data]);
                setPasien(response.data.pelayanan)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchDokter();
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
                                    <Link to='/admin/data-dokter'>
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
                                                    <label className='col-md-3'>Nama Dokter</label>
                                                    <span>{item.nama}</span>
                                                </div>
                                                <div className="form-row mt-3">
                                                    <label className='col-md-3'>email</label>
                                                    <span>{item.email}</span>
                                                </div>
                                                <div className="form-row mt-3">
                                                    <label className='col-md-3'>Alamat</label>
                                                    <span>{item.alamat}</span>
                                                </div>
                                                <div className="form-row mt-3">
                                                    <label className='col-md-3'>Poliklinik</label>
                                                    <span>{item.poliklinik.poliklinik}</span>
                                                </div>
                                                <div className="form-row mt-3">
                                                    <label className='col-md-3'>Jumlah Pasien Done</label>
                                                    <span className='col-md-2'>{jumlahPasien ? (jumlahPasien) : ('Tidak ada pasien')}</span>
                                                    <input type="date" value={tanggal} onChange={(e) => { setTanggal(e.target.value) }} className="form-control form-control-sm col-md-2" />
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

export default DetailDokter