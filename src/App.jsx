import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHeader from "./components/layout/MainHeader";
import Login from "./pages/auth/login.jsx";
import Register from "./pages/auth/register.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen font-Roboto">

        <MainHeader />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
};

export default App;