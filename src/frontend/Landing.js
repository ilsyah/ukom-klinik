import React from 'react'
import doctor from '../assets/Dr-singh.png'
import Topnav2 from './components/Topnav2'
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div>
            <Topnav2 />
            <div className="container">
                <div class="row position-relative" style={{ height: 'calc(100vh - 6rem)' }}>
                    <div class="d-flex justify-content-center flex-column overflow-hidden">
                        <div class="flex-row ">
                            <h1><b>Selamat Datang <span className='text-success'>KlinikSehat.com</span></b></h1>
                            <h4>Apakah Anda Memiliki Keluhan?</h4>
                            <p>Segeralah Berobat Karena Kesehatan Anda Adalah Prioritas Kami</p>
                            {/* <div className="mx-1"> */}
                            <Link to='/poliklinik'>
                                <button type="button" class="btn btn-outline-light mx-1">Pasien</button>
                            </Link>
                            <Link to='/dokter/login'>
                                <button type="button" class="btn btn-outline-light mx-1">Dokter</button>
                            </Link>
                            <Link to='/admin/login'>
                                <button type="button" class="btn btn-outline-light mx-1">Admin</button>
                            </Link>
                            {/* </div> */}
                        </div>
                    </div>
                    <img className="float-right m-auto z-n1 position-absolute object-fit-cover" style={{ width: '35rem', zIndex: '-1', right: '0px', bottom: '0' }} src={doctor} alt srcSet />
                </div>
            </div>
        </div>
    )
}

export default Landing