import React from 'react'
import logo from "../../assets/logo-klinik.png";


const Footer2 = () => {
    return (
        <footer className='px-5 py-4' style={{ background: '#303030' }}>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <img
                                style={{ width: 40 }}
                                src={logo}
                                alt=""
                                className="brand-image img-circle elevation-3 mb-3 mr-2"
                            />
                            <span className="h3 text-success">
                                <b>Klinik</b>Sehat
                            </span>

                            <div className="row mx-2">
                                <i className='fa fa-phone mt-1 mr-2'></i>
                                <h5>+62 881-504-5530</h5>
                            </div>
                            <div className="row mx-2">
                                <i className='fa fa-envelope mt-1 mr-2'></i>
                                <h5>kliniksehat@gmail.com</h5>
                            </div>
                            <div className="row mx-2">
                                <p className='mt-2'>Klinikkita adalah sebuah website yang didedikasikan untuk memberikan informasi
                                    dan layanan terkait dengan sebuah klinik kesehatan yang bernama "Klinik Kita."
                                    Website ini menyediakan informasi mengenai lokasi klinik, jam operasional, layanan medis
                                    yang tersedia, serta profil lengkap dari dokter-dokter yang bekerja di klinik tersebut</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 pl-5">
                    <h3>Sosial Media Kami</h3>
                    <div className="row ml-2">
                        <i className='fab fa-twitter mt-1 mr-2'></i>
                        <h5>@klinikkita</h5>
                    </div>
                    <div className="row ml-2">
                        <i className='fab fa-instagram mt-1 mr-2'></i>
                        <h5>@klinik_kitaa</h5>
                    </div>
                    <div className="row ml-2">
                        <i className='fab fa-facebook mt-1 mr-2'></i>
                        <h5>KliniKita</h5>
                    </div>
                    <div className="row ml-2">
                        <i className='fab fa-whatsapp mt-1 mr-2'></i>
                        <h5>+62 812-9160-5306</h5>
                    </div>
                </div>
                <div className="col-lg-4 pl-5">
                    <h3>Langganan</h3>
                    <p>Bergabunglah Dengan Layanan Eksklusif Bagi User Yang Berlangganan</p>
                    <form action="">
                        <input className='form-control' type="email" name="" id="" placeholder='Email Anda' />
                        <button type='submit' className="btn btn-outline-light mt-3">Langganan</button>
                    </form>
                </div>
            </div>
            <hr style={{ background: 'white' }} />
            <div className="text-center">
                <strong>
                    Copyright © 2022-2023 <span className="text-danger"> JADIDIN.io </span>{" "}
                </strong>
                All rights reserved.
            </div>
        </footer>
    )
}

export default Footer2