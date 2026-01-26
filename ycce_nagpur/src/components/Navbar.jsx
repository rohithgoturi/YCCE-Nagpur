import { Link } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import logo from '../assets/logo.png';

const Navbar = () => {
  const [dark, setDark] = useTheme();

  return (
    <header className=" flex items-center justify-between px-3 py-2 shadow-md bg-sky-950 text-white text-lg font-normal font-sans w-full">
      <div className="logo flex items-center gap-2">
        <img className=" w-20 "
         src={logo} alt="ycce logo" />

        <h3 className=" text-4xl font-medium font-serif">YCCE</h3>

      </div>

      <nav className=" nav-links flex items-center gap-8">
        <Link className=" text-white decoration-none hover:underline hover:underline-offset-8 "
         to='#'>Home</Link>
        <Link className=" text-white decoration-none hover:underline hover:underline-offset-8 "
         to='#'>Departments</Link>
        <Link className=" text-white decoration-none hover:underline hover:underline-offset-8 "
         to='#'>Admissions</Link>
        <Link className=" text-white decoration-none hover:underline hover:underline-offset-8 "
         to='#'>Research</Link>
        <Link className=" text-white decoration-none hover:underline hover:underline-offset-8 "
         to='#'>About us</Link>
         <button className=" bg-sky-600 px-4 py-2 rounded-lg">
          Admission Brochure
         </button>

        {/* <a href="#">Home</a>
        <a href="#">Departments</a>
        <a href="#">Admissions</a>
        <a href="#">Placements</a>
        <a href="#">Research</a> */}

        <button className="cta-btn bg-sky-600 px-4 py-3 rounded-lg" onClick={() => setDark(!dark)}>
        {dark ? "☀️" : "🌙"}
        
      </button>
      </nav>
      
    </header>
  );
};

export default Navbar;
