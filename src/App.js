import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'
import HomeUser from './pages/dashboardUser/HomeUser'
import Rumahku from './pages/dashboardUser/Rumahku'
import RumahkuEdit from './pages/dashboardUser/RumahkuEdit'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/warga/dashboard" element={<HomeUser />} />
          <Route path="/warga/rumahku" element={<Rumahku />} />
          <Route path="/warga/rumahku/edit" element={<RumahkuEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
