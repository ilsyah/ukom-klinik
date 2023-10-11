import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./admin/pages/Dashboard";
import DashboardDokter from "./dokter/pages/Dashboard";
import PasienDokter from "./dokter/pages/Antrian";
import DataDokter from "./admin/pages/DataDokter";
import Antrian from "./admin/pages/Antrian";
import Login from "./admin/pages/Login";
import HistoryDokter from "./dokter/pages/History";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="admin/dashboard" element={<Dashboard />} />
        <Route path="admin/data-dokter" element={<DataDokter />} />
        <Route path="admin/antrian" element={<Antrian />} />
        <Route path="admin/login" element={<Login />} />
        <Route path="dokter/dashboard" element={<DashboardDokter />} />
        <Route path="dokter/pasien" element={<PasienDokter />} />
        <Route path="dokter/history" element={<HistoryDokter />} />
      </Routes>
    </Router>
  );
}

export default App;
