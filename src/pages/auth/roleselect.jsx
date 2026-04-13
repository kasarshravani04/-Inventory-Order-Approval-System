import { useNavigate } from "react-router-dom";

const RoleSelect = () => {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    localStorage.setItem("role", role);
    navigate("/login"); // OR /register
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-3xl font-bold">Select Your Role</h1>

      <button onClick={() => handleSelect("Admin")} className="btn">
        Admin
      </button>

      <button onClick={() => handleSelect("Sales Executive")} className="btn">
        Sales Executive
      </button>

      <button onClick={() => handleSelect("Manager")} className="btn">
        Manager
      </button>
    </div>
  );
};

export default RoleSelect;