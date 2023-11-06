import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Admin Start
import LoginAdmin from "./admin/pages/LoginAdmin";
import Dashboard from "./admin/pages/Dashboard";
import DataDokter from "./admin/pages/DataDokter";
import Antrian from "./admin/pages/Antrian";
import History from "./admin/pages/History";
import DataLayanan from "./admin/pages/DataLayanan";
import DetailPasien from "./admin/pages/DetailPasien";
import TambahDokter from "./admin/pages/TambahDokter";
import EditDokter from "./admin/pages/EditDokter";
// Admin End

// Dokter Start
import DashboardDokter from "./dokter/pages/Dashboard";
import Login from "./dokter/pages/Login";
import PasienDokter from "./dokter/pages/Antrian";
import HistoryDokter from "./dokter/pages/History";
import DetailAntrian from "./dokter/detail/DetailAntri";
// Dokter End

// Frontend Start
import Landing from "./frontend/Landing";
import Poliklinik from "./frontend/Poliklinik";
import Pendaftaran from "./frontend/Pendaftaran";
import DetailHistory from "./dokter/detail/DetailHistory";
import TambahLayanan from "./admin/pages/TambahLayanan";
import EditLayanan from "./admin/pages/EditLayanan";
import DetailDokter from "./admin/pages/DetailDokter";
// Frontend End

function App() {
  return (
    <Router>
      <Routes>
        {/* Frontend Routing Start */}
        <Route path="/" element={<Landing />} />
        <Route path="/poliklinik" element={<Poliklinik />} />
        <Route path="/pendaftaran/:id" element={<Pendaftaran />} />
        {/* Frontend Routing End */}

        {/* Dokter Routing Start */}
        <Route path="dokter/dashboard" element={<DashboardDokter />} />
        <Route path="dokter/antrian" element={<PasienDokter />} />
        <Route path="dokter/history" element={<HistoryDokter />} />
        <Route path="dokter/login" element={<Login />} />
        <Route path="dokter/detail-history/:id" element={<DetailHistory />} />
        <Route path="dokter/detail-antrian/:id" element={<DetailAntrian />} />
        {/* Dokter Routing End */}

        {/* Admin Routing Start */}
        <Route path="admin/login" element={<LoginAdmin />} />

        <Route path="admin/dashboard" element={<Dashboard />} />
        <Route path="admin/data-dokter" element={<DataDokter />} />
        <Route path="admin/detail-dokter/:id" element={<DetailDokter />} />
        <Route path="admin/tambah-dokter" element={<TambahDokter />} />
        <Route path="admin/edit-dokter/:id" element={<EditDokter />} />

        <Route path="admin/data-layanan" element={<DataLayanan />} />
        <Route path="admin/tambah-layanan" element={<TambahLayanan />} />
        <Route path="admin/edit-layanan/:id" element={<EditLayanan />} />

        <Route path="admin/antrian" element={<Antrian />} />
        <Route path="admin/history" element={<History />} />
        <Route path="admin/detail-pasien/:id" element={<DetailPasien />} />

        {/* Admin Routing End */}
      </Routes>
    </Router>
  );
}

export default App;
