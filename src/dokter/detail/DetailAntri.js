import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Topnav from "../components/Topnav";
import Sidenav from "../components/Sidenav";
import Footer from "../components/Footer";

const DetailAntrian = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch(`http://127.0.0.1:8000/api/v1/pelayanan/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDetail([data]);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleUpdate = () => {
    fetch(`http://127.0.0.1:8000/api/v1/pelayanan/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((response) => {
        if (response.ok) {
          navigate("/admin/history");
          Swal.fire("Sukses", "Data Berhasil", "success");
        } else {
          console.error("Error updating data");
        }
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

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
                  <Link to="/dokter/antrian">
                    <button className="btn btn-outline-light btn-sm">
                      <i className="fa fa-arrow-left"></i> Kembali
                    </button>
                  </Link>
                </div>
                <div className="card mt-4">
                  <div className="card-header">
                    <h3 className="card-title">Detail Antrian</h3>
                  </div>
                  {loading ? (
                    "Loding..."
                  ) : (
                    <div className="card-body">
                      {detail.map((item) => (
                        <form key={item.id}>
                          <div className="form-row mt-3">
                            <label className="col-md-3">Nama Pasien</label>
                            <span>{item.nama}</span>
                          </div>
                          <div className="form-row mt-3">
                            <label className="col-md-3">NIK</label>
                            <span>{item.nik}</span>
                          </div>
                          <div className="form-row mt-3">
                            <label className="col-md-3">Tgl Periksa</label>
                            <span>{item.tanggal}</span>
                          </div>
                          <div className="form-row mt-3">
                            <label className="col-md-3">Poliklinik</label>
                            <span>{item.poliklinik.poliklinik}</span>
                          </div>
                          <div className="form-row mt-3">
                            <label className="col-md-3">Penjamin</label>
                            <span>{item.penjamin}</span>
                          </div>
                          <div className="form-row mt-3">
                            <label className="col-md-3">No Antrian</label>
                            <span>{item.antrian}</span>
                          </div>
                        </form>
                      ))}
                      <button
                        onClick={handleUpdate}
                        className="btn btn-sm btn-success col-12 mt-3">
                        Accepted
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default DetailAntrian;
