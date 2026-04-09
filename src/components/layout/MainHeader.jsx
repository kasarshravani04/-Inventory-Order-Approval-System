import { NavLink } from "react-router-dom";
import headerlogo from "../../assets/logo/headerlogo.png";


const MainHeader = () => {
  return (
    <header>
        <div className="flex justify-between p-8 bg-navyblue">
            <img src={headerlogo} alt="headerlogo" loading="eager" fetchPriority="high"
                 className="ml-4 h-12 object-contain"/> 

            <div className="flex gap-4">
                 <NavLink to="/login">
                    <button className="px-4 py-2 bg-btn text-white rounded">
                      Login
                    </button>
                 </NavLink>

                 <NavLink to="/register">
                    <button className="px-4 py-2 bg-btn text-white rounded">
                     Register
                    </button>
                </NavLink>
            </div>

        </div>

    </header>
  )
}

export default MainHeader;