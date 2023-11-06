import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Topnav from "../components/Topnav";
import Sidenav from "../components/Sidenav";
import Footer from "../components/Footer";
import axios from "axios";
import Swal from "sweetalert2";
import Pagination from "../components/Pagination";

const DataLayanan = () => {
  const [layanan, setLayanan] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  const fetchLayanan = async (page) => {
    axios.get(`http://127.0.0.1:8000/api/v1/poliklinik?page=${page}`)
      .then((response) => {
        const meta = response.data
        setLayanan(response.data.data)
        setTotalPage(meta.last_page)
        setLoading(false)
        // console.log(meta)
      })
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

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
      .delete(`http://127.0.0.1:8000/api/v1/poliklinik/${id}`)
      .then((response) => {
        if (response.status === 200) {
          // Data berhasil dihapus, lakukan sesuatu
          // navigate('/admin/data-layanan')
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

  const filterLayanan = layanan.filter(item => item.poliklinik.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    fetchLayanan(currentPage);
  }, [currentPage]);

  return (
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
                    <h3 className="card-title">Data Layanan</h3>
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
                          placeholder="Search"
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
                  <div className="d-flex">
                    <div className="col-lg-3 px-3 mb-3">
                      <Link to="/admin/tambah-layanan">
                        <button className="btn btn-outline-light btn-sm">
                          <i className="fa fa-plus fa-sm"></i> Tambah Layanan
                        </button>
                      </Link>
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
                            <th>Poliklinik</th>
                            <th>Kode Poli</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {filterLayanan.map((item) => (
                            <tr key={item.id}>
                              {/* <td>1</td> */}
                              <td>{item.poliklinik}</td>
                              <td>{item.kode_poli}</td>
                              <td>
                                <Link
                                  to={`/admin/edit-layanan/${item.id}`}
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
                      <div>
                        <Pagination totalPages={totalPage} handleClick={handlePageClick} />
                      </div>
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

export default DataLayanan;
