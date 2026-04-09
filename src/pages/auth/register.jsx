import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import passwordicon from "../../assets/icons/passwordicon.png";


const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    accepted: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  setError("");

  if (!formData.accepted) {
    setError("Please accept terms & conditions");
    return;
  }

  if (formData.password.length < 8) {
    setError("Password must be at least 8 characters long");
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    setError("Passwords do not match");
    return;
  }

  const userData = {
    email: formData.email,
    password: formData.password,
  };

  // localStorage
  localStorage.setItem("user", JSON.stringify(userData));

  alert("Account created successfully!");
  navigate("/login");
};


  return (
    <div className="flex items-center justify-center bg-white px-4 py-16">
      <div className="w-full max-w-xl rounded-2xl shadow-[0px_0px_56px_#00260314] p-10">
        
        <h1 className="text-4xl font-bold text-center mb-8">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <label htmlFor="email" className="hidden"></label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-xl outline  outline-gray-1 hover:outline-gray-9 transition duration-200"
          />


          <div className="relative">
            <label htmlFor="password" className="hidden"></label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full p-4  rounded-xl outline  outline-gray-1 hover:outline-gray-9 transition duration-200"
            />
            <img
                src={passwordicon}
                alt="toggle password"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-4 cursor-pointer"
            />
          </div>

          
          <div className="relative">
            <label htmlFor="confirmpassword" className="hidden"></label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-4 rounded-xl outline outline-gray-1 hover:outline-gray-9 transition duration-200"
            />
            <img
                src={passwordicon}
                alt="toggle password"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-4 cursor-pointer"
            />
          </div>

          
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="accepted"
              checked={formData.accepted}
              onChange={handleChange}
              className="w-5 h-5"
            />
            <label className="text-gray-6">
              Accept all terms & Conditions
            </label>
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">
              {error}
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green text-white py-4 rounded-full text-lg font-semibold hover:bg-hard-primary transition"
          >
            Create Account
          </button>
        </form>

        
        <p className="text-center mt-6 text-gray-6">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-black">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;
