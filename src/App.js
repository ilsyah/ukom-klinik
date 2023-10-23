import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Admin Start
import Dashboard from "./admin/pages/Dashboard";
import DataDokter from "./admin/pages/DataDokter";
import Antrian from "./admin/pages/Antrian";
import Login from "./admin/pages/Login";
import History from "./admin/pages/History";
import DataLayanan from "./admin/pages/DataLayanan";
import DetailPasien from "./admin/pages/DetailPasien";
import TambahDokter from "./admin/pages/TambahDokter";
import EditDokter from "./admin/pages/EditDokter";
// Admin End

// Dokter Start
import DashboardDokter from "./dokter/pages/Dashboard"
import PasienDokter from "./dokter/pages/Antrian"
import HistoryDokter from "./dokter/pages/History"
import DetailAntrian from "./dokter/detail/DetailAntri";
// Dokter End

// Frontend Start
import Landing from "./frontend/Landing";
import Poliklinik from "./frontend/Poliklinik";
import Pendaftaran from "./frontend/Pendaftaran";
// Frontend End

function App() {
  return (
    <Router>
      <Routes>
        {/* Frontend Routing Start */}
        <Route path="/" element={<Landing />} />
        <Route path="/poliklinik" element={<Poliklinik />} />
        <Route path="/pendaftaran" element={<Pendaftaran />} />
        {/* Frontend Routing End */}

        {/* Dokter Routing Start */}
        <Route path="dokter/dashboard" element={<DashboardDokter />} />
        <Route path="dokter/antrian" element={<PasienDokter />} />
        <Route path="dokter/history" element={<HistoryDokter />} />
        <Route path="dokter/detail-antrian" element={<DetailAntrian />} />
        {/* Dokter Routing End */}

        {/* Admin Routing Start */}
        <Route path="admin/dashboard" element={<Dashboard />} />
        <Route path="admin/data-dokter" element={<DataDokter />} />
        <Route path="admin/tambah-dokter" element={<TambahDokter />} />
        <Route path="admin/edit-dokter" element={<EditDokter />} />
        <Route path="admin/data-layanan" element={<DataLayanan />} />
        <Route path="admin/antrian" element={<Antrian />} />
        <Route path="admin/login" element={<Login />} />
        <Route path="admin/history" element={<History />} />
        <Route path="admin/history" element={<History />} />
        <Route path="admin/detail-pasien" element={<DetailPasien />} />

        {/* Admin Routing End */}
      </Routes>
    </Router>
  );
}

export default App;
