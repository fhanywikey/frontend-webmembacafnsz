import Ntdfe from "../../assets/img/Ntdfe.jpg";
import Satal from "../../assets/img/Satal.jpg";
import Ip from "../../assets/img/Ip.jpg";
import Lp from "../../assets/img/Lp.jpg";
import Qfa from "../../assets/img/Qfa.jpg";
import { Link } from "react-router-dom";
import "../../assets/css/genre.css";

function Fantasy() {
  return (
<div className="">
    <div className="">
      <h1 className="font-bold text-4xl text-center my-10 md:ml-20">Kategori Cerita Yang Tersedia</h1>
    </div>
    <div className="flex flex-col justify-center pt-10 pb-5 mt-5 mx-5 rounded-2xl bg-lime-100 mb-5">
      <div className="flex">
        <h1 className="font-semibold  ml-4 text-2xl md:text-3xl">KATEGORI CERITA FANTASY</h1>
      </div>
      <div className="fantasy ml-10 mt-4 flex flex-wrap">
        <Link to="/sinopsis/fantasys1">
          <img src={Ntdfe} alt="Ntdfe" />
          <h5 className="font-bold text-center">Nemesis The Demon <br/> from Empire</h5>
        </Link>
        <a href="">
          <img src={Satal} alt="Satal" />
          <h5 className="font-bold text-center">Surviving as the <br/> Abandoned Lady</h5>
        </a>
        <a href="https://www.wattpad.com/1406065127-idol-player-prologue">
          <img src={Ip} alt="Ip" />
          <h5 className="font-bold text-center">Idol Player</h5>
        </a>
        <a href="https://www.wattpad.com/1207746990-laut-pasang-1994-01%F0%9F%8C%8A-perkenalan-singkat-prolog">
          <img src={Lp} alt="Lp" />
          <h5 className="font-bold text-center">Laut Pasang, 1994</h5>
        </a>
        <a href="https://www.wattpad.com/966770104-queen-for-alpha-prolog">
          <img src={Qfa} alt="Qfa" />
          <h5 className="font-bold text-center">Queen for Alpha</h5>
        </a>
      </div>
      <button className="w-full md:1/4 bg-gray-200 py-1 px-4 rounded-2xl ml-auto mt-4 md:mt-6">
         <Link to="/genre/fantasy" className="">lihat lebih banyak </Link>
      </button>
    </div>
</div>
  );
}
export default Fantasy;
