import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Topnav from "../components/Topnav";
import Sidenav from "../components/Sidenav";
import Footer from "../components/Footer";
import axios from "axios";
import Swal from "sweetalert2";
import Pagination from "../components/Pagination";

const DataDokter = () => {
  const [dokter, setDokter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [layanan, setLayanan] = useState([]);
  // const [dokterList, setDokterList] = useState([]);
  const [poli, setPoli] = useState('');

  const [search, setSearch] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const fetchDokter = (page) => {
    axios.get(`http://127.0.0.1:8000/api/v1/dokter?page=${page}`)
      .then((response) => {
        // return response.json();
        const meta = response.data
        setDokter(response.data.data)
        setTotalPage(meta.last_page)
        setLoading(false);
      })
    // .then((data) => {
    //   // console.log(data)
    //   setLoading(false);
    //   setDokter(data);
    //   // setDokterList(data);
    // });
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const fetchLayanan = () => {
    fetch("http://127.0.0.1:8000/api/v1/data-poliklinik")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data)
        setLayanan(data);

      });
  };

  const alertDelete = (id) => {
    Swal.fire({
      title: 'apakah anda yakin ingin menghapus data ini ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonClass: 'btn-danger',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: "No, cancel plx!",
      closeOnConfirm: false,
      closeOnCancel: false
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(id);
      } else {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  }

  const handleDelete = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/v1/dokter/${id}`)
      .then((response) => {
        if (response.status === 200) {
          reload();
        } else {
          // Tampilkan pesan error atau tangani error sesuai kebutuhan
          console.error("Gagal menghapus data");
        }
      });
  };

  const reload = () => {
    window.location.reload();
  }

  useEffect(() => {
    fetchDokter(currentPage);
    fetchLayanan();
  }, [currentPage]);

  const filterDokter = dokter.filter(item => item.poliklinik.poliklinik.includes(poli) && item.nama.toLowerCase().includes(search.toLowerCase()))
  // console.log(filterDokter)

  return (
    // <h1>y</h1>
    <div className="wrapper">
      <Topnav />
      <Sidenav />
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card mt-4">
                  <div className="card-header">
                    <h3 className="card-title">Data Dokter</h3>
                    <div className="card-tools">
                      <div
                        className="input-group input-group-sm"
                        style={{ width: 150 }}>
                        <input
                          type="text"
                          name="table_search"
                          value={search}
                          onChange={(e) => { setSearch(e.target.value) }}
                          className="form-control float-right"
                          placeholder="Cari Nama"
                        />
                        <div className="input-group-append">
                          <button type="submit" className="btn btn-default">
                            <i className="fas fa-search" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="row my-2">
                    <div className="mx-3">
                      <Link to="/admin/tambah-dokter">
                        <button className="btn btn-outline-light btn-sm">
                          <i className="fa fa-plus fa-sm"></i> Tambah Dokter
                        </button>
                      </Link>
                    </div>
                    <div className="col-md-3">
                      <select value={poli} onChange={e => setPoli(e.target.value)} className="custom-select custom-select-sm col-5">
                        {/* console.log(item) */}
                        <option value=''>Semua</option>
                        {layanan.map((item) => (
                          <option key={item.id} value={item.poliklinik}>{item.poliklinik}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div
                    className="card-body table-responsive p-0"
                    style={{ height: 400 }}>
                    {loading ? (
                      <h1 className="text-center">Loading bang</h1>
                    ) : (
                      <table className="table table-head-fixed text-nowrap text-center">
                        <thead>
                          <tr>
                            {/* <th>No</th> */}
                            <th>Nama</th>
                            <th>poliklinik</th>
                            <th>Email</th>
                            <th>Alamat</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {filterDokter.map((item) => (
                            <tr key={item.id}>
                              {/* <td>1</td> */}
                              <td>{item.nama}</td>
                              <td>{item.poliklinik.poliklinik}</td>
                              <td>{item.email}</td>
                              <td>{item.alamat}</td>
                              <td>
                                <Link
                                  to={`/admin/detail-dokter/${item.id}`}
                                  className="btn btn-sm btn-success mx-1">
                                  <i className="fa fa-info fa-sm"></i>
                                </Link>
                                <Link
                                  to={`/admin/edit-dokter/${item.id}`}
                                  className="btn btn-sm btn-warning mx-1">
                                  <i className="fa fa-edit fa-sm"></i>
                                </Link>
                                <button
                                  onClick={() => {
                                    alertDelete(item.id);
                                  }}
                                  className="btn btn-sm btn-danger mx-1">
                                  <i className="fa fa-trash-alt fa-sm"></i>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                  <div className="card-footer">
                    <div className="card-tools">
                      <Pagination totalPages={totalPage} handleClick={handlePageClick} />
                    </div>
                  </div>
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

export default DataDokter;
