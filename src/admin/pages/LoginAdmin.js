import React, { useEffect, useState } from "react";
import logo from "../../assets/logo-klinik.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";

const LoginAdmin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [validator, setValidator] = useState([]);
    const navigate = useNavigate();

    const [capthca, setCaptcha] = useState(false);


    const onChange = () => {

    };

    useEffect(() => {
        if (localStorage.getItem("data")) {
            navigate("/admin/dashboard");
            window.location.reload();
        }
    }, []);

    const loginHandler = async (e) => {
        e.preventDefault();

        if (!capthca) {
            Swal.fire("ReCaptcha Verification", "Please Fill the Captcha Verification", "error")
            return;
        } else {

            const formData = new FormData();

            formData.append("email", email);
            formData.append("password", password);
            await axios
                .post("http://127.0.0.1:8000/api/login-user", formData)
                .then((response) => {
                    console.log(response.data);
                    localStorage.setItem("data", response.data.token_login);
                    navigate("/admin/dashboard");
                    window.location.reload();
                })
                .catch((error) => {
                    console.log(error.response.data);
                    setValidator(error.response.data);
                    setEmail("");
                    setPassword("");
                });


        }



    };

    return (
        <div className="login-page">
            <div className="login-box">
                <div className="card card-outline card-info">
                    <div className="card-header text-center">
                        <img
                            style={{ width: 50 }}
                            src={logo}
                            alt=""
                            className="brand-image img-circle elevation-3 mb-3 mr-2"
                        />
                        <span className="h1 text-success">
                            <b>Klinik</b>Sehat
                        </span>
                    </div>
                    <div className="card-body">
                        {/* <p className="login-box-msg">Sign in for Admin</p> */}
                        <form onSubmit={loginHandler}>
                            {validator.message && (
                                <div className="alert alert-danger">{validator.message}</div>
                            )}
                            <div className="input-group mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            {validator.email && (
                                <div className="alert alert-danger">{validator.email[0]}</div>
                            )}
                            <div className="input-group mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            {validator.email && (
                                <div className="alert alert-danger">
                                    {validator.password[0]}
                                </div>
                            )}
                            <ReCAPTCHA
                                sitekey="6LcNlOooAAAAAJZBanfAitcaWFF-A8tPgSW5OCyO"
                                onChange={() => setCaptcha(true)}
                            />
                            <div className="row">
                                {/* /.col */}
                                <div className="col-12">
                                    <button type="submit" className="btn btn-info btn-block">
                                        Sign In
                                    </button>
                                </div>
                                {/* /.col */}
                            </div>
                        </form>
                        {/* /.social-auth-links */}
                    </div>
                    {/* /.card-body */}
                </div>
            </div>
        </div>
    )
}

export default LoginAdmin