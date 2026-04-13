import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import passwordicon from "../../assets/icons/passwordicon.png";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Simple validation
    if (!storedUser) {
      setError("Please register first");
      return;
    }

    if (storedUser.email !== email || storedUser.password !== password) {
      setError("Invalid email or password");
      return;
    }

    // Save login session
    localStorage.setItem("loggedInUser", JSON.stringify({ email }));

    // Redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center bg-white px-4 py-16">
      <div className="w-full max-w-xl p-10 shadow rounded-2xl">

        <h1 className="text-center text-3xl mb-6">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded"
            />

            <img
              src={passwordicon}
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 w-5 cursor-pointer"
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <button className="w-full bg-green-500 text-white py-3 rounded">
            Login
          </button>
        </form>

        <p className="text-center mt-4">
          Don’t have account?{" "}
          <NavLink to="/register">Register</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;