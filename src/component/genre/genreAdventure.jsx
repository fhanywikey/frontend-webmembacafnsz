import { Link } from "react-router-dom";

function GenreAdventure() {
  // Data cerita
  const stories = [
    {
      link: "https://www.wattpad.com/1064337886-ken-cat-end-1",
      imageSrc: "https://img.wattpad.com/cover/268268207-144-k577942.jpg",
      title: "Ken & Cat",
      description:
        "Catrionna Arches dipaksa menikah dengan jenderal militer kerajaan, Kenard Gilson. Perjodohan yang telah dirancang sejak lama oleh kedua ayah mereka membuat Catrionna tak bisa menolaknya. Tetapi, rumor yang beredar luas di seluruh negeri bahwa sang jenderal militer berwajah buruk rupa karena seringnya bertugas di medan perang membuat Catrionna berencana untuk kabur.",
    },
    {
      link: "https://www.wattpad.com/1372833922-i-want-you-prolog",
      imageSrc: "https://img.wattpad.com/cover/349642945-144-k668233.jpg",
      title: "I Want You",
      description:
        "Thalia Navgra seorang dokter spesialis kandungan dari abad 21. Wanita pintar, tangguh, pandai dalam memasak dan bela diri. Thalia mengalami kecelakaan yang di latar belakangi oleh sang paman dan jiwanya terdampar di dalam sebuah Novel milik sahabatnya sendiri.",
    },
    {
      link: "https://img.wattpad.com/cover/344897966-416-k500066.jpghttps://img.wattpad.com/cover/333561462-144-k437806.jpg",
      imageSrc: "https://img.wattpad.com/cover/344897966-416-k500066.jpghttps://img.wattpad.com/cover/333561462-144-k437806.jpg",
      title: "I'm The Villain's And Hero's Mom✔",
      description:
        "Liviana Putri adalah seorang budak korporat yang selalu bekerja seharian. Dia mati karena kelelahan saat membaca novel setelah punya waktu untuk beristirahat. Bukannya ke alam baka, Livi malah masuk ke tubuh seorang ratu dari buku yang dia baca. Lilyana White East, ratu yang membenci putra kembarnyabersama kaisar karena dianggap merusak tubuhnya.",
    },
    {
      link: "",
        imageSrc: "https://img.wattpad.com/cover/344806750-416-k468320.jpg",
        title: "TRAP!",
        description: "Valinada Rahadis memilih mengakhiri hidup usai mahkota berharganya direbut paksa oleh mantan kekasihnya. Namun, siapa yang menyangka ketika membuka mata, Valina malah mendapati dirinya masuk ke dalam cerita pendek berjudul Naiza. Hal yang tidak bisa dicerna oleh akal sehat adalah ketika dirinya memasuki raga  seseorang bernama Alunada Geyzer.",
    },
    {
      link: "",
        imageSrc: "https://img.wattpad.com/cover/349960775-144-k837815.jpg",
        title: "SECOND CHANCE",
        description: "Tak pernah terpikirkan dalam benak Keana, jika ia akan kembali ke masa putih abu-abu. Harusnya Keana bahagia karena bisa  kembali ke masa lalu, sayangnya putih abu-abu di matanya tak lebih dari neraka yang ia ciptakan sendiri. Gue ngga mau  mati, gue harus berubah!",
    },
    {
      link: "",
        imageSrc: "https://img.wattpad.com/cover/306617535-144-k13030.jpg",
        title: "SURVIVAL LOVE",
        description: "Seperti apa rasanya terdampar di pulau berdua hanya dengan seorang pria super kaya yang merupakan calon kakak iparnya. Tidak ada air tawar, tidak ada makanan, tidak ada tempat berteduh, pakaian pun sampai harus bergantian. Tapi tetap harus SURVIVE! Ternyata di alam liar Jemy tidak hanya harus   survive dari tantangan alam dia juga harus mempertahankan diri   dari serangan pria yang bisa lebih buas dari raja rimba.",
    },
    {
      link: "",
        imageSrc: "https://img.wattpad.com/cover/290568116-416-k275061.jpg",
        title: "Illusion",
        description: "Harusnya dari awal, Audy tak terlalu berambisi mengubah alur kehidupan di dunia yang mungkin hanya fatamorgana semata. Terlalu hanyut dalam kehangatan yang membuatnya nyaman hingga lupa bahwa mereka tak nyata ada, dan bisa hilang dalam satu kedipan mata. Melupakan satu fakta, bahwa mereka hanya karakter fiksi, karangan manusia.",
    },
    {
      link: "",
        imageSrc: "https://img.wattpad.com/cover/305888211-416-k769226.jpg",
        title: "CURSED GIRL",
        description: "Ayahku seorang Duke, ibuku punya banyak naga dan aku punya tiga kakak pria yang sangat kuat dan melindungiku. Aku juga punya banyak paman yang menyukaiku dan aku paling menyukai paman Zen. Dia kaya. Dia pria dingin yang menyimpan trauma pada wanita. Tapi, dia baik-baik saja denganku karena aku hanya bocah umur 7 tahun. Semua baik-baik saja, hingga aku menginjak umur 10 tahun. Segel dalam jiwaku terlepas dan aroma paman Zen berubah.",
    },
    {
      link: "",
        imageSrc: "https://img.wattpad.com/cover/289956065-416-k577051.jpg",
        title: "Transmigrasi My Mom",
        description: " Carolyn Angela Rebecca  Adalah  prempuan yang mempunyai keahlian sebagai seorang Hacker yang mendunia,Karna keganasannya dibidang IT dia harus diburu oleh beberapa mafia yang membutuhkannya. Meskipun tau dia selalu diburu sikapnya yang tenang dan licik membuat beberapa mafia semakin tertarik kepadanya.",
    },
    {
      link: "",
        imageSrc: "https://img.wattpad.com/cover/210954393-416-k348514.jpg",
        title: "Anstia",
        description: "Thalia Navgra seorang dokter spesialis kandungan dari abad 21. Wanita pintar, tangguh, pandai dalam memasak dan bela diri. Thalia mengalami kecelakaan yang di latar belakangi oleh sang pamandan jiwanya terdampar di dalam sebuah Novel milik sahabatnya sendiri.",
    },
  /*   {
      link: "",
        imageSrc: "",
        title: "",
        description: "",
    },
    {
      link: "",
        imageSrc: "",
        title: "",
        description: "",
    }, */
  ];

  return (
    <div className="mt-10">
      <button className="mb-5 ml-5 bg-lime-400 px-10 py-2 rounded-2xl">
        <Link to="/genre">Kembali</Link>
      </button>
      <h1 className="font-semibold text-center ml-5 text-3xl">Genre Adventure</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 pt-10 pl-5">
        {stories.map((story, index) => (
          <StoryCard key={index} {...story} />
        ))}
      </div>
    </div>
  );
}

const StoryCard = ({ link, imageSrc, title, description }) => (
  <a
    href={link}
    className="flex bg-white p-4 rounded-lg overflow-hidden shadow-md mb-5"
    style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
  >
    <img className="w-32 h-32 object-cover rounded mr-4" src={imageSrc} alt="btr" />
    <div className="flex flex-col justify-between">
      <div>
        <h5 className="font-bold text-2xl my-2">{title}</h5>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  </a>
);

export default GenreAdventure;
