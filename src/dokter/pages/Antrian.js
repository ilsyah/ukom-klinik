import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Topnav from "../components/Topnav";
import Sidenav from "../components/Sidenav";
import Footer from "../components/Footer";

const Antrian = () => {
  const [antrian, setAntrian] = useState([]);
  const [layanan, setLayanan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [poli, setPoli] = useState('');

  const [tanggal, setTanggal] = useState('')

  const fetchLayanan = () => {
    fetch("http://127.0.0.1:8000/api/v1/poliklinik")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLayanan(data);

      });
  };

  const fetchAntrian = () => {
    fetch("http://127.0.0.1:8000/api/v1/pelayanan")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data)
        setLoading(false);
        setAntrian(data);
      });
  };

  useEffect(() => {
    fetchLayanan();
    fetchAntrian();
  }, []);
  // console.log(antrian)
  const filterAntri = antrian.filter(item => item.tanggal.includes(tanggal) && item.poliklinik.poliklinik.includes(poli))
  // console.log(filterAntri)

  // const id = antrian[].id;

  return (
    <div className="wrapper">
      <Topnav />
      <Sidenav />
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid">
            <div className="row pt-6">
              <h3>Data Antrian Pasien</h3>
            </div>
            <div className="row">
              <div className="mx-1">
                <select value={poli} onChange={e => setPoli(e.target.value)} className="custom-select custom-select-sm">
                  <option value=''>Semua</option>
                  {layanan.map((item) => (
                    // console.log(item)
                    <option key={item.id} value={item.poliklinik}>{item.poliklinik}</option>
                  ))}
                </select>
              </div>
              <div className="mx-1">
                <input type="date" value={tanggal} onChange={(e) => { setTanggal(e.target.value) }} className="form-control form-control-sm" />
              </div>
            </div>
            {loading ? (
              <h1 className="text-center">Loading bang</h1>
            ) : (
              <div className="row">
                {/* {antrian.length === 0 ? (
                  <span className="alert alert-danger text-center col-12">
                    Tidak ada antrian
                  </span>
                ) : (
                  <> */}
                {filterAntri.map((item) => (
                  // console.log(item)
                  <div key={item.id} className="col-md-3">
                    <div className="card card-primary bg-white mt-3 collapsed-card">
                      <div className="card-header">
                        <h3 className="card-title">
                          No Antri : {item.antrian}
                        </h3>
                        <div className="card-tools">
                          <button
                            type="button"
                            className="btn btn-tool"
                            data-card-widget="collapse">
                            <i className="fas fa-plus" />
                          </button>
                        </div>
                      </div>
                      <div className="card-body">
                        <table className="table table-sm text-center">
                          <thead>
                            <tr>
                              <th>Nama</th>
                              <th>#</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{item.nama}</td>
                              <td>
                                <Link
                                  to={`/dokter/detail-antrian/${item.id}`}
                                  className="btn btn-sm btn-warning">
                                  Detail
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <th>Status</th>
                              <td>
                                <span className="badge badge-warning">
                                  Pending
                                </span>
                              </td>
                            </tr>
                            {/* <tr>
                              <th>Poliklinik</th>
                              <td>
                                <span>
                                  {item.poliklinik.poliklinik}
                                </span>
                              </td>
                            </tr> */}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ))}
                {/* </>
                )} */}
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Antrian;
