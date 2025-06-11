import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handleToLoginPage = () => {
    navigate("/login"); // Changed to navigate to "/login"
  };

  return (
    <nav className={`${styles.paddingX} w-full flex justify-between items-center py-5 fixed top-0 z-20 bg-primary`}>
      <Link
        to="/"
        className="flex items-center gap-2"
        onClick={() => {
          setActive("");
          window.scroll(0, 0); 
        }}
      >
        <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
        <p className="text-white text-[18px] font-bold cursor-pointer flex">
          M.S.Aghazadeh
        </p>
      </Link>

      <ul className="list-none hidden sm:flex flex-row gap-10">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`${active === nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={`#${nav.id}`}>{nav.title}</Link> {/* Changed to Link */}
          </li>
        ))}
        <li>
          <button onClick={handleToLoginPage} className="text-white hover:text-secondary text-[18px] font-medium">
            Login
          </button>
        </li>
      </ul>

      {/* Mobile menu remains the same */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
        <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${active === nav.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(nav.title);
                }}
              >
                <Link to={`#${nav.id}`}>{nav.title}</Link> {/* Changed to Link */}
              </li>
            ))}
            <li onClick={handleToLoginPage} className="text-white font-poppins font-medium cursor-pointer text-[16px]">
              Login
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;