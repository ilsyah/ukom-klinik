import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../assets/logo-klinik.png";



const Topnav2 = () => {
    return (
        <nav className=" navbar navbar-expand navbar-dark">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <img
                        style={{ width: 40 }}
                        src={logo}
                        alt=""
                        className="brand-image img-circle elevation-3 mb-3 mr-2"
                    />
                    <span className="h3 text-success">
                        <b>Klinik</b>Sehat
                    </span>
                </li>
            </ul>
        </nav>
    )
}

export default Topnav2