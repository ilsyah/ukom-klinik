import React from "react";
import logo from "../../assets/logo-klinik.png";
import { Link } from "react-router-dom";

const Login = () => {
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
            <p className="login-box-msg">Sign in for Admin</p>
            <form action="../../index3.html" method="post">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                {/* /.col */}
                <div className="col-12">
                  <Link to="/admin/dashboard">
                    <button type="submit" className="btn btn-info btn-block">
                      Sign In
                    </button>
                  </Link>
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
  );
};

export default Login;
