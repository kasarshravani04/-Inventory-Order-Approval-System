import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHeader from "./components/layout/MainHeader";
import Login from "./pages/auth/login.jsx";
import Register from "./pages/auth/register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import RoleSelect from "./pages/auth/roleselect.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen font-Roboto">

        <MainHeader />

        <Routes>
          <Route path="/" element={<RoleSelect/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>

      </div>
    </BrowserRouter>
  );
};

export default App;