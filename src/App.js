import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./admin/pages/Dashboard";
import DashboardDokter from "./dokter/pages/Dashboard"
import PasienDokter from "./dokter/pages/Antrian"
import HistoryDokter from "./dokter/pages/History"
import DataDokter from "./admin/pages/DataDokter";
import Antrian from "./admin/pages/Antrian";
import Login from "./admin/pages/Login";
import Landing from "./frontend/Landing";
import Poliklinik from "./frontend/Poliklinik";
import Pendaftaran from "./frontend/Pendaftaran";

function App() {
  return (
    <Router>
      <Routes>
        {/* Frontend Routing Start */}
        <Route path="/welcome" element={<Landing />} />
        <Route path="/poliklinik" element={<Poliklinik />} />
        <Route path="/pendaftaran" element={<Pendaftaran />} />
        {/* Frontend Routing End */}

        {/* Dokter Routing Start */}
        <Route path="dokter/dashboard" element={<DashboardDokter />} />
        <Route path="dokter/pasien" element={<PasienDokter />} />
        <Route path="dokter/history" element={<HistoryDokter />} />
        {/* Dokter Routing End */}

        {/* Admin Routing Start */}
        <Route path="admin/dashboard" element={<Dashboard />} />
        <Route path="admin/data-dokter" element={<DataDokter />} />
        <Route path="admin/antrian" element={<Antrian />} />
        <Route path="admin/login" element={<Login />} />

        {/* Admin Routing End */}
      </Routes>
    </Router>
  );
}

export default App;
