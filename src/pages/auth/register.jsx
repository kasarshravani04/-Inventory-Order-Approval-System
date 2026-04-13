import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import passwordicon from "../../assets/icons/passwordicon.png";

const Register = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Only simple validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const role = localStorage.getItem("role");

    const userData = {
          email: formData.email,
          password: formData.password,
          role: role,
    };
    // Store in localStorage
    localStorage.setItem("user", JSON.stringify(userData));

    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center bg-white px-4 py-16">
      <div className="w-full max-w-xl p-10 shadow rounded-2xl">

        <h1 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded"
            />
            <img
              src={passwordicon}
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 w-5 cursor-pointer"
            />
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 border rounded"
            />
            <img
              src={passwordicon}
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-3 top-3 w-5 cursor-pointer"
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <button className="w-full bg-green-500 text-white py-3 rounded">
            Create Account
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
};

export default Register;