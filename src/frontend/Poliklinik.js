import React, { useEffect, useState } from 'react'
import Topnav2 from './components/Topnav2'
import Footer2 from './components/Footer2';
import doctor_icon from '../assets/doctor-icon.png'
import { Link } from "react-router-dom";

const Poliklinik = () => {

    const [poliklinik, setPoliklinik] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPoliklinik = () => {
        fetch('http://127.0.0.1:8000/api/v1/poliklinik')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // console.log(data)
                setPoliklinik(data);
                setLoading(false)
            });
    };

    useEffect(() => {
        fetchPoliklinik();
    }, [])

    return (
        <div className='wrapper'>
            <Topnav2 />
            <div className="container">
                <div className="mt-3">
                    <div className="mb-3">
                        <h1 className='text-center' >Pilih Poliklinik</h1>
                        <p className="text-center">Anda Memiliki Keluhan? Berobatlah Sekarang Dan Poliklinik Yang Anda Inginkan</p>
                    </div>
                    {loading ? <h1 className="text-center">Loading bang</h1> : (

                        <div className="row">
                            {poliklinik.map((item) => (
                                <div key={item.id} className="col-lg-3 col-sm-6 col-md-6">
                                    <Link to='/pendaftaran'>
                                        <div className="card">
                                            <div className="card-body d-flex justify-content-center align-items-center">
                                                <img src={doctor_icon} style={{ width: '5rem' }} alt="" />
                                            </div>
                                            <div className="card-footer">
                                                <h5 className='text-center text-poli'>{item.poliklinik}</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}

                        </div>
                    )}

                </div>
            </div>
            <Footer2 />
        </div>
    )
}

export default Poliklinik