import Logo from "../../assets/img/Logo.png";
import Fnsz from "../../assets/img/Fnsz.png";
import '../../assets/css/header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
    <nav className="navbar bg-gray-300">
      <div className="logo flex text-black">
        <img src={Logo} alt="Logo" />
        <p>FNSZ.com</p>
      </div>
      <div className="p-4">
        <nav className="container mx-auto">
          <ul className="flex justify-between pr-8 md:pr-24 items-center">
            <li className="text-black text-lg font-bold"><Link to="/">Home</Link></li>
            <li className="relative group">
            <Link to="/genre" className="text-black text-lg md:pl-4 cursor-pointer font-bold">Genre</Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
      <div className="overflow">
        <img className="w-full h-auto md:w-full" src={Fnsz} alt="fnsz" />
        <p className="text-center font-semibold text-lg md:text-xl mt-4 md:mt-8 px-4">
          Website untuk membaca  berbagai macam cerita mulai dari cerita pendek hingga novel,
          cerita yang ada disini adalah 
          <br/> cerita fiksi dan non-fiksi yang diambil dari cerita cerita yang sudah ada.
        </p>
      </div>
      </div>
  )
}
export default Header; 