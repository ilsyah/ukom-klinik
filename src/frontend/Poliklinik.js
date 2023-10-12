import React from 'react'
import Topnav2 from './components/Topnav2'
import Footer2 from './components/Footer2';
import doctor_icon from '../assets/doctor-icon.png'
import { Link } from "react-router-dom";

const Poliklinik = () => {
    return (
        <div className='wrapper'>
            <Topnav2 />
            <div className="container">

                <h4>Pilih Poliklinik</h4>
                <div className="row">
                    <div className="col-3">
                        <Link to='/pendaftaran'>
                            <div className="card">
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <img src={doctor_icon} style={{ width: '5rem' }} alt="" />
                                </div>
                                <div className="card-footer">
                                    <h5 className='text-center text-poli'>Poliklinik</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-3">
                        <Link to='#'>
                            <div className="card">
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <img src={doctor_icon} style={{ width: '5rem' }} alt="" />
                                </div>
                                <div className="card-footer">
                                    <h5 className='text-center text-poli'>Poliklinik</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-3">
                        <Link to='#'>
                            <div className="card">
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <img src={doctor_icon} style={{ width: '5rem' }} alt="" />
                                </div>
                                <div className="card-footer">
                                    <h5 className='text-center text-poli'>Poliklinik</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-3">
                        <Link to='#'>
                            <div className="card">
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <img src={doctor_icon} style={{ width: '5rem' }} alt="" />
                                </div>
                                <div className="card-footer">
                                    <h5 className='text-center text-poli'>Poliklinik</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer2 />
        </div>
    )
}

export default Poliklinik