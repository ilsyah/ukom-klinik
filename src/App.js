import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/admin/Dashboard";
import DataDokter from "./pages/admin/DataDokter";
import Antrian from "./pages/admin/Antrian";
import Login from "./pages/admin/Login";
import Landing from "./pages/frontend/Landing";
import Poliklinik from "./pages/frontend/Poliklinik";
import Pendaftaran from "./pages/frontend/Pendaftaran";

function App() {
  return (
    <Router>
      <Routes>
        {/* Frontend Routing Start */}
        <Route path="/welcome" element={<Landing />} />
        <Route path="/poliklinik" element={<Poliklinik />} />
        <Route path="/pendaftaran" element={<Pendaftaran />} />
        {/* Frontend Routing End */}

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
