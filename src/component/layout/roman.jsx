import Thediamond from "../../assets/img/thediamond.jpg";
import Sph from "../../assets/img/sph.jpg";
import Shortstories from "../../assets/img/shortstories.jpg";
import Satuatap from "../../assets/img/satuatap.jpg";
import Bdm from "../../assets/img/bdm.jpg";
import { Link } from "react-router-dom";
import "../../assets/css/genre.css";

function Roman() {
  return (
    <div>
    <div className="flex flex-col justify-center pt-10 pb-5 mt-5 mx-5 rounded-2xl bg-lime-100 mb-5">
      <div className="flex">
        <h1 className="font-semibold  ml-4 text-2xl md:text-3xl">KATEGORI CERITA ROMAN</h1>
      </div>
      <div className="roman ml-10 mt-4 flex flex-wrap">
        <Link to="/sinopsis/romans1">
          <img src={Thediamond} alt="Ntdfe" />
          <h5 className="font-bold text-center">The Diamond of <br/> The Ring</h5>
        </Link>
        <a href="https://www.wattpad.com/1270206608-sepotong-hati-yang-terluka-bag-1">
          <img src={Sph} alt="sph" />
          <h5 className="font-bold text-center">Sepotong Hati <br/> yang Terluka </h5>
        </a>
        <a href="https://www.wattpad.com/762622455-short-stories-silent-01">
          <img src={Shortstories} alt="ss" />
          <h5 className="font-bold text-center">Short Storie</h5>
        </a>
        <a href="https://www.wattpad.com/1380347813-satu-atap-satu-kampus-pengantar">
          <img src={Satuatap} alt="sp" />
          <h5 className="font-bold text-center">Satu Atap Satu <br/> Kampus</h5>
        </a>
        <a href="https://www.wattpad.com/1351147316-bersaing-dengan-masalalu-satu">
          <img src={Bdm} alt="Bdm" />
          <h5 className="font-bold text-center">Bersaing Dengan <br/> Masalalu</h5>
        </a>
      </div>
      <button className="w-full md:1/4 bg-gray-200 py-1 px-4 rounded-2xl ml-auto mt-4 md:mt-6">
         <Link to="/genre/roman" className="">lihat lebih banyak-> </Link>
      </button>
    </div>
  </div>
  );
}
export default Roman;
