import { useState } from "react";
import {NavLink,Link} from "react-router-dom";
import passwordicon from "../../assets/icons/passwordicon.png";

const Login = () => {
    const[email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [showPassword,setShowPassword] = useState(false);
    const [remember,setRemember] = useState(false);
    const [error,setError] = useState("");
    const [success,setSuccess] = useState("");

    

const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
   
    const storedUser = JSON.parse(localStorage.getItem("user")) || [];
    if(!storedUser) {
        setError("User Not Found,Please Register First");
        return;
    }
    
    if (storedUser.email!== email){
        console.log(storedUser.email)
        console.log(email)
        setError("Email not found");
        return;
    }
    if (storedUser.password!== password){
        setError("Incorrect Password");
        return;
    }

    setSuccess("Login Successful");
     
    
    const loginData = {email};

   if (remember) {
    localStorage.setItem("loggedInUser", JSON.stringify(loginData));
      } 
    else {
    sessionStorage.setItem("loggedInUser", JSON.stringify(loginData));
    }

};

    return (
        <div className="flex items-center justify-center bg-white px-4 py-16">
            <div className="w-full max-w-xl rounded-2xl shadow-[0px_0px_56px_#00260314] p-10">

            <h1 className="text-center mb-8 text-4xl font-semibold text-gray-9" >
            Login In
            </h1>

            <form className="space-y-6" onSubmit={handleSubmit}>
                  <label htmlFor="email" className="hidden">email</label>
                  <input 
                   type = "email"
                   placeholder="Enter Your Email"
                   value={email}
                   id="email"
                   name="email"
                   onChange={(e) => setEmail(e.target.value)}
                   required
                   className="w-full p-4 outline outline-gray-1 rounded-xl hover:outline-gray-9 transition duration-200"
                   />
                  <div className="relative w-full">
                   <label  htmlFor="email" className="hidden">password</label>
                   <input
                     type = {
                        showPassword ? "text" : "password"
                     } 
                     
                     placeholder="Enter Your Password"
                     value={password}
                     id="password"
                     name="password"
                     onChange={(e) => setPassword(e.target.value)}
                     required
                     className="w-full p-4 pr-12 outline outline-gray-1 rounded-xl hover:outline-gray-9 transition duration-200"
                   />
                    <img
                    src={passwordicon}
                    alt="toggle password"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-4 cursor-pointer"
                    />
                </div>

                 <div className="flex items-center justify-between mt-4">
                        <label htmlFor="remember" className="flex items-center gap-2 cursor-pointer">
                        <input
                        type="checkbox"
                        checked={remember}
                        id="remember"
                        onChange={() => setRemember(!remember)}
                        className="w-4 h-4 "
                        />
                        <span className=" text-sm sm:text-lg text-gray-6">Remember Me</span>
                       </label>
                        <Link
                           to = "/forgotpassowrd"
                           className="text-sm sm:text-lg text-gray-6 hover:underline ">
                           Forgot Password?  
                        </Link> 
                    </div>
                     {error && (
                           <p className="text-red-500 text-sm text-center">
                     {error}
                           </p>
                    )}

                     {success && (
                          <p className="text-green-600 text-sm text-center">
                     {success}
                          </p>
                    )}

                   {/* <Button
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-4xl text-lg font-semibold hover:bg-hard-primary transition duration-200"
                    >
                     Login
                    </Button> */}
                    <button
                       type="submit"
                       className="w-full bg-green-500 text-white py-4 rounded-full"
                     >
                       Login
                    </button>

            </form>
                <p className="text-center mt-6 text-gray-6">Don’t have account?
                   <NavLink 
                     to = "/register"
                     className="font-semibold text-black" 
                    > 
                    Register
                   </NavLink>
                </p>
            </div>
        </div>
    )
};

export default Login;
