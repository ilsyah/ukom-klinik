import React from 'react'
import Topnav2 from '../../components/navigasi/Topnav2'
import Footer2 from '../../components/navigasi/Footer2';

const Pendaftaran = () => {
    return (
        <div className="wrapper">
            <Topnav2 />
            <div className="container">
                <div className="my-5">
                    <button className="btn btn-outline-light mb-3">Cancel</button>
                    <div className="card">
                        <div className="card-body">
                            <h4>Pendaftaran</h4>
                            <form action="">
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
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon1">🍌</span>
                                            <input type="number" class="form-control" placeholder="NIK" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center align-item-center mt-4">
                                    <button className="btn btn-outline-light">Lanjut <span>√</span></button>
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