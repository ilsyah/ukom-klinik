import React from 'react'
import Topnav2 from './components/Topnav2'
import Footer2 from './components/Footer2';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

const Pendaftaran = () => {
    const buttonAlert = (e) => {
        e.preventDefault()
        Swal.fire({
            title: 'NOMOR ANTRIAN',
            html:
                '<h1>100</h1>' +
                '<p>Nama : Nama User</p>' +
                '<p>NIK : XXXXXXXXXXXXX</p>' +
                '<p>Tanggal: TGL / BLN / THN</p>' +
                '<p>Poliklinik : Nama Poliklinik</p>' +
                '<p>Penjamin : Nama Penjamin</p>'
        })
    }
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
                            <form>
                                <div className="form-row mt-3">
                                    <label className="col-md-3">Nama Lengkap</label>
                                    <div className="col-md-8">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1"><i className='fa fa-user'></i></span>
                                            <input type="text" className="form-control" placeholder="Nama Lengkap" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row mt-3">
                                    <label className="col-md-3">TGL</label>
                                    <span>Tgl / Bulan / Tahun</span>
                                </div>
                                <div className="form-row mt-3">
                                    <label className="col-md-3">Poliklinik</label>
                                    <span>Nama Poliklinik</span>
                                </div>
                                <div className="form-row mt-3">
                                    <label className="col-md-3">Penjamin</label>
                                    <button className="btn btn-outline-light mr-2">BPJS Kesehatan</button>
                                    <button className="btn btn-outline-light mr-2">Asuransi Lainnya</button>
                                </div>
                                <div className="form-row mt-3">
                                    <label className="col-md-3">NIK</label>
                                    <div className="col-md-8">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1"><i className='fa fa-book'></i></span>
                                            <input type="number" className="form-control" placeholder="NIK" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center align-item-center mt-4">
                                    <button onClick={buttonAlert} className="btn btn-outline-light">Lanjut <i className='fa fa-check'></i></button>
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