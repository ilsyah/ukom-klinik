import React, { useEffect, useState } from "react";
import Topnav2 from "./components/Topnav2";
import Footer2 from "./components/Footer2";
import Swal from "sweetalert2";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Pendaftaran = () => {
  const { id } = useParams();
  const [nama, setNama] = useState('');
  const [antrian, setAntrian] = useState("");
  const [loading, setLoading] = useState(true);
  const [insert, setInsert] = useState({});
  const [dokter, setDokter] = useState([]);
  // const [select, setSelect] = useState();

  const [formData, setFormData] = useState({
    penjamin: "",
    nama: "",
    jk: "",
    tanggal: "",
    nik: "",
    poliklinik_id: id,
    dokter_id: "",
  });

  const fetchPoliklinik = () => {
    fetch(`http://127.0.0.1:8000/api/v1/poliklinik/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data)
        setNama(data.poliklinik);
      });
  };

  useEffect(() => {
    fetchPoliklinik();
  }, []);


  const navigate = useNavigate();

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setError({
      ...error,
      [e.target.name]: "",
    });
  };

  const getData = async (e) => {
    e.preventDefault();

    await axios
      .post("http://127.0.0.1:8000/api/v1/get-antri", formData)
      .then((response) => {
        setLoading(false)
        setAntrian(response.data.antrian);
        setInsert(formData);
      });
    await axios
      .post("http://127.0.0.1:8000/api/v1/get-dokter", formData)
      .then((response) => {
        setLoading(false)
        setDokter(response.data);
        setInsert(formData);
      });

    console.log(formData)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://127.0.0.1:8000/api/v1/pelayanan", formData)
      .then((response) => {
        navigate('/')
        Swal.fire({
          title: 'Pendaftaran Sukses',
          icon: 'success',
          confirmButtonClass: 'btn-success',
          confirmButtonText: 'Selesai',
          closeOnConfirm: false,
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        })
      })
      .catch((error) => {
        setError(error.response.data.errors);
      });
  };

  // console.log(formData.dokter_id + 'ha')

  return (
    <div className="wrapper">
      <Topnav2 />
      <div className="container">
        <div className="my-5">
          <Link to="/poliklinik">
            <button className="btn btn-outline-light mb-3"><i className="fa fa-arrow-left"></i> Cancel</button>
          </Link>
          <div className="card">
            <div className="card-body">
              <h4>Pendaftaran</h4>
              <form>
                <div className="form-row mt-3">
                  <label className="col-md-3">Nama Lengkap</label>
                  <div className="col-md-8">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        name="nama"
                        className="form-control"
                        placeholder="Nama Lengkap"
                        value={formData.nama}
                        onChange={handleChange}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    {error.nama && (
                      <small className="text-danger text-center">
                        {error.nama}
                      </small>
                    )}
                  </div>
                </div>

                <div className="form-row mt-3">
                  <label className="col-md-3">Jenis Kelamin</label>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="jk"
                      id="lk"
                      value="L"
                      checked={formData.jk === "L"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="lk">
                      Laki Laki
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="jk"
                      id="pr"
                      value="P"
                      checked={formData.jk === "P"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="pr">
                      Perempuan
                    </label>
                  </div>
                </div>
                {error.jk && <p style={{ color: "red" }}>{error.jk}</p>}
                <div className="form-row mt-3">
                  <label className="col-md-3">TGL</label>
                  <div className="col-md-8">
                    <input
                      className="form-control"
                      type="date"
                      name="tanggal"
                      value={formData.tanggal}
                      onChange={handleChange}
                      id=""
                    />
                    {error.tanggal && (
                      <p style={{ color: "red" }}>{error.tanggal}</p>
                    )}
                  </div>
                </div>
                <div className="form-row mt-3">
                  <label className="col-md-3">Poliklinik</label>
                  <span>{nama}</span>
                </div>
                <div className="form-row mt-3">
                  <label className="col-md-3">Penjamin</label>
                  {/* <button className="btn btn-outline-light mr-2">BPJS Kesehatan</button>
                                    <button className="btn btn-outline-light mr-2">Asuransi Lainnya</button> */}
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="penjamin"
                      id="umum"
                      value="umum"
                      checked={formData.penjamin === "umum"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="umum">
                      Umum
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="penjamin"
                      id="bpjs"
                      value="bpjs"
                      checked={formData.penjamin === "bpjs"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="bpjs">
                      BPJS
                    </label>
                  </div>
                </div>
                {error.penjamin && (
                  <p className="text-end" style={{ color: "red" }}>
                    {error.penjamin}
                  </p>
                )}
                <div className="form-row mt-3">
                  <label className="col-md-3">NIK</label>
                  <div className="col-md-8">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa fa-book"></i>
                      </span>
                      <input
                        type="number"
                        name="nik"
                        className="form-control"
                        placeholder="NIK"
                        value={formData.nik}
                        onChange={handleChange}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    {error.nik && <p style={{ color: "red" }}>{error.nik}</p>}
                  </div>
                </div>
                <div className="d-flex justify-content-center align-item-center mt-4">
                  <button
                    onClick={getData}
                    type="button"
                    className="btn btn-outline-light"
                    data-toggle="modal"
                    data-target="#modal-secondary">
                    Lanjut <i className="fa fa-check" />
                  </button>
                  {/* <button type="submit" className="btn btn-outline-light">
                    Lanjut <i className="fa fa-check"></i>
                  </button> */}
                </div>
                <div className="modal fade" id="modal-secondary">
                  <div className="modal-dialog">
                    <div className="modal-content bg-secondary">
                      <div className="modal-header">
                        <h4 className="modal-title">Detail Form</h4>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        {loading ? (
                          "loading..."
                        ) : (
                          <>
                            <div className="form-row mt-3">
                              <label className="col-md-3">No Antrian</label>
                              {/* {antrian === "" ? (
                              <span>1</span>
                            ) : (
                              <span>{antrian + 1}</span>
                            )} */}
                              <span>{antrian}</span>
                            </div>
                            <div className="form-row mt-3">
                              <label className="col-md-3">Nama Lengkap</label>
                              <span>{insert.nama}</span>
                            </div>
                            <div className="form-row mt-3">
                              <label className="col-md-3">Jenis Kelamin</label>
                              <span>{insert.jk}</span>
                            </div>
                            <div className="form-row mt-3">
                              <label className="col-md-3">Tgl Periksa</label>
                              <span>{insert.tanggal}</span>
                            </div>
                            <div className="form-row mt-3">
                              <label className="col-md-3">Poliklinik</label>
                              <span>{nama}</span>
                            </div>
                            <div className="form-row mt-3">
                              <label className="col-md-3">Dokter</label>
                              <div className="col-md-6">
                                <select value={formData.dokter_id} onChange={handleChange} name="dokter_id" className="custom-select custom-select-sm" id="">
                                  <option value="">Pilih Dokter</option>
                                  {dokter.map((item) => (
                                    <option key={item.id} value={item.id}>{item.nama}</option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div className="form-row mt-3">
                              <label className="col-md-3">Penjamin</label>
                              <span>{insert.penjamin}</span>
                            </div>
                            <div className="form-row mt-3">
                              <label className="col-md-3">NIK</label>
                              <span>{insert.nik}</span>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="modal-footer justify-content-between">
                        <button
                          onClick={handleSubmit}
                          type="submit"
                          className="btn btn-outline-light">
                          Kirim
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div >
      <Footer2 />
    </div >
  );
};

export default Pendaftaran;
