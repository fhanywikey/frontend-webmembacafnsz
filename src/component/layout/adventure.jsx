import Oliver from "../../assets/img/oliver.jpg";
import Demonic from "../../assets/img/demonic.jpg";
import Reincarnation from "../../assets/img/reincarnation.jpg";
import Isekai from "../../assets/img/isekai.jpg";
import Tensura from "../../assets/img/tensura.jpg";
import { Link } from "react-router-dom";
import "../../assets/css/genre.css";

function Adventure() {
  return (
    <div className="flex flex-col justify-center pt-10 pb-5 mt-5 mx-5 rounded-2xl bg-lime-100 mb-5">
      <div className="flex">
        <h1 className="font-semibold  ml-4 text-2xl md:text-3xl">KATEGORI CERITA ADVENTURE</h1>
      </div>
      <div className="adventure ml-10 mt-4 flex flex-wrap">
        <Link to="/sinopsis/adventures1">
          <img src={Oliver} alt="oliver" className="oliver" />
          <h5 className="font-bold text-center">Oliver's Puzzle</h5>
        </Link>
        <a href="https://www.wattpad.com/1358344714-the-demonic-youngest-daughter-chapter-1">
          <img src={Demonic} alt="demonic" />
          <h5 className="font-bold text-center">The Demonic Youngest <br/> Daughter</h5>
        </a>
        <a href="https://www.wattpad.com/1293375394-reincarnation-of-a-wibu-prolog">
          <img src={Reincarnation} alt="reincarnation" />
          <h5 className="font-bold text-center">Reincarnation <br/> Of A Wibu</h5>
        </a>
        <a href="https://www.wattpad.com/718492414-isekai-no-kuroi-tenshi-ni-naru-prolog">
          <img src={Isekai} alt="isekai" />
          <h5 className="font-bold text-center">Isekai no kuroi <br/> tenshi ni naru</h5>
        </a>
        <a href="https://www.wattpad.com/1193724791-tensura-x-kimetsu-no-yaiba-chapter-01-gate-pertama">
          <img src={Tensura} alt="Tensura" />
          <h5 className="font-bold text-center">ensura X kimetsu <br/> no yaiba</h5>
        </a>
      </div>
      <button className="w-full md:1/4 bg-gray-200 py-1 px-4 rounded-2xl ml-auto mt-4 md:mt-6">
<<<<<<< HEAD
         <Link to="/genre/adventure" className="text-center">lihat lebih banyak </Link>
=======
         <Link to="/genre/adventure" className="text-center"> lihat lebih banyak  </Link>
>>>>>>> a7cf7da3c5fa1e4e1bbbaa5b04a65ae428787689
      </button>
    </div>
  );
}
export default Adventure;
