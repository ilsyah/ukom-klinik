import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/admin/Dashboard";
import DataDokter from "./pages/admin/DataDokter";
import Antrian from "./pages/admin/Antrian";
import Login from "./pages/admin/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="admin/dashboard" element={<Dashboard />} />
        <Route path="admin/data-dokter" element={<DataDokter />} />
        <Route path="admin/antrian" element={<Antrian />} />
        <Route path="admin/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
