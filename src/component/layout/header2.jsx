/* import Logo from "../../assets/img/Logo.png";
import '../../assets/css/header.css';
import { Link } from "react-router-dom";

function Header2() {
  return (
    <div>
    <nav className="navbar bg-gray-300">
      <div className="logo flex text-black">
        <img src={Logo} alt="Logo" />
        <p>FNSZ.com</p>
      </div>
      <div className="p-4">
        <nav className="container mx-auto">
          <ul className="flex justify-between pr-[100px] items-center">
            <li className="text-black text-lg font-bold"><Link to="/">Home</Link></li>
            <li className="relative group">
              <span className="text-black cursor-pointer bg-gray-500 px-[80px] ml-[600px]  py-[5px] rounded-2xl">Jelajahi</span>
              <div className="absolute hidden bg-white text-gray-800 group-hover:block mt-2 ml-[650px] p-2 rounded-md shadow-md">
                <Link to="/genre/fantasy" className="block px-4 py-2">Fantasy</Link>
                <Link to="/genre/adventure" className="block px-4 py-2">Adventure</Link>
                <Link to="/genre/horror" className="block px-4 py-2">Horror</Link>
                <Link to="/genre/roman" className="block px-4 py-2">Roman</Link>
              </div>
            </li>
           
          </ul>
        </nav>
      </div>
    </nav>
  </div>
  )
}
export default Header2;  */

import Logo from "../../assets/img/Logo.png";
import Fnsz from "../../assets/img/Fnsz.png";
import '../../assets/css/header.css';
import { Link } from "react-router-dom";

function Header2() {
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
            <li className="text-black text-lg font-bold ml-5"><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </div>
    </nav>
      </div>
  )
}
export default Header2; 