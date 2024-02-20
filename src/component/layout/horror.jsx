import Hod from "../../assets/img/Hod.jpg";
import Tkc from "../../assets/img/Tkc.jpg";
import Tbk from "../../assets/img/Tbk.jpg";
import Gc from "../../assets/img/Gc.jpg";
import Jk from "../../assets/img/Jk.jpg";
import { Link } from "react-router-dom";
import "../../assets/css/genre.css";

function Horror() {
  return (
     <div className="flex flex-col justify-center pt-10 pb-5 mt-5 mx-5 rounded-2xl bg-lime-100 mb-5">
      <div className="flex">
        <h1 className="font-semibold  ml-4 text-2xl md:text-3xl">KATEGORI CERITA HORROR</h1>
      </div>
      <div className="horror ml-10 mt-4 flex flex-wrap">
        <Link to="/sinopsis/horrors1">
          <img src={Hod} alt="Ntdfe" />
          <h5 className="font-bold text-center">Hide Or Die</h5>
        </Link>
        <a href="https://www.wattpad.com/1356145372-tumbal-keluarga-cakrawangsa-1-the-beginning">
          <img className="" src={Tkc} alt="Tkc" />
          <h5 className="font-bold text-center">Tumbal keluarga <br/> Cakrawangsa</h5>
        </a>
        <a href="https://www.wattpad.com/1321865878-teluh-beras-kuning-prolog">
          <img className="" src={Tbk} alt="Tbk" />
          <h5 className="font-bold text-center">Teluh Beras Kuning</h5>
        </a>
        <a href="https://www.wattpad.com/1386649952-ghost-class-1-%F0%9F%91%BB">
          <img className="" src={Gc} alt="Gc" />
          <h5 className="font-bold text-center">Ghost Class</h5>
        </a>
        <a href="https://www.wattpad.com/1129931355-jadi-kuyang-sudah-terbit-1">
          <img className="" src={Jk} alt="Jk" />
          <h5 className="font-bold text-center">Jadi kuyang</h5>
        </a>
      </div>
       <button className="w-full md:1/4 bg-gray-200 py-1 px-4 rounded-2xl ml-auto mt-4 md:mt-6">
          <Link to="/genre/horror" className="">lihat lebih banyak-> </Link>
       </button>
    </div>
  );
}
export default Horror;
