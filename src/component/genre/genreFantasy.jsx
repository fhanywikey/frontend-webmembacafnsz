import { Link } from "react-router-dom";

function GenreFantasy() {
  // Data cerita
  const stories = [
    {
      link: "https://www.wattpad.com/1298678621-sleep-flowers-sang-editor",
      imageSrc: "https://img.wattpad.com/cover/330137523-144-k457462.jpg",
      title: "Sleep Flowers",
      description: "Seyren Rosseline Theodore, adalah tokoh antagonis dalam novel yang sedang ia revisi sampai lembur semalaman, tokoh yang ia tentukan untuk mati di akhir ceritanya. Dan sayangnya Asteria harus merasakan bagaimana menjadi Seorang Seyren, dia yang menentukan takdir antagonis itu & dia juga yg harus mengubah takdir yg sudah dia tentukan.",
    },
    {
      link: "https://www.wattpad.com/1337954916-he-is-she-ayo-nabung-h-i-s-0-1",
      imageSrc: "https://img.wattpad.com/cover/340440606-352-k547469.jpg",
      title: "He is She",
      description: "Sarah Zanuar masuk ke dalam novel yang ternyata itu memang dunia nyata bagi Sharon Paviss. Lalu...apa?",
    },
    {
      link: "https://www.wattpad.com/1404042596-can-you-let-me-go-novel",
      imageSrc: "https://img.wattpad.com/cover/357833146-416-k301582.jpg",
      title: "Can You Let Me Go?",
      description: "Dellia pikir dirinya akan terbangun di akhirat namun ternyata dirinya salah. Ia malah bangun di tubuh seorang antagonis dalam novel yang ia baca sebelum ia mati. Ellia Georgia, seorang antagonis yang mati di tangan tunangannya sendiri yg memiliki peran sebagai Male Lead di dalam novel tersebut. ",
    },
    {
      link: "https://www.wattpad.com/1399608472-petrichor",
      imageSrc: "https://img.wattpad.com/cover/356667789-352-k364139.jpg",
      title: "Petrichor",
      description: "Siapa yang tidak mengenal Brian Gilberta Majeed? Seorang Duke dari selatan yaitu wilayah sibyl. Sibyl yang awalnya hanya wilayah penuh pemberontak sekarang menjadi salah satu wilayah maju dengan keberhasilan pemerataan baik kota maupun desa.",
    },
    {
      link: "https://www.wattpad.com/1377486164-kaizen-itu-aku-prolog",
      imageSrc: "https://img.wattpad.com/cover/350987846-416-k116465.jpg",
      title: "Kaizen itu Aku",
      description: "Ada protagonis tentu ada antagonis. Antagonis di cerita ini adalah seorang pria bernama Kaizen Agate. Dia adalah karakter yang paling paling paling aku sukai! TAPI KENAPA KEHIDUPANNYA SANGAT MENYEDIHKAN BEGINI!! Tidak bisa diterima! ",
    },
    {
      link: "https://www.wattpad.com/1367144755-claire-on-going-awal",
      imageSrc: "https://img.wattpad.com/cover/347880584-352-k486228.jpg",
      title: "CLAIRE (On Going)",
      description: "Pada saat Claira pulang sekolah, tidak sengaja dirinya melihat sebuah novel yang menceritakan kisah cinta tragis seorang antagonis. Melihat deskripsi cerita tersebut membuat Claira tertarik untuk membacanya. Setelah membaca kisah cerita tersebut membuat Claira geram dengan para tokoh dinovel. Saat Claira pergi mencari makan diluar dirinya tertabrak mobil yang rem nya blong. ",
    },
    {
      link: "https://www.wattpad.com/1346678585-butterfly-world-prolog",
      imageSrc: "https://img.wattpad.com/cover/342656897-416-k152686.jpg",
      title: "Butterfly World",
      description: "sebagai protagonis wanita? No!, Antagonis wanita? No!, dirinya ber transmigrasi menjadi figuran dan menjadi adik tiri dari antagonis wanita, memiliki kakak yang terobsesi dengan protagonis pria, dan jangan lupakan tunangannya yang menyukai protagonis wanita.",
    },
    {
      link: "https://www.wattpad.com/1220265847-life-in-novels-%E2%93%AA%E2%93%AA",
      imageSrc: "https://img.wattpad.com/cover/309287649-416-k939967.jpg",
      title: "Life In Novels",
      description: " Aliya menjadi Illyorra. Salah satu tokoh yang terinspirasi darinya. Nasib buruk menyelimuti Illyorra. Dia mati karena melindungi tokoh utama. Lalu... Untuk apa Illyorra melindungi tokoh utama lagi? Aliya tidak peduli jika alur novel ini berubah. Yang ia cari adalah kebahagiaan untuk Illyorra dan dirinya.",
    },
    {
      link: "https://www.wattpad.com/1182046907-the-unstella-antagonist-talent-end-chapter-i",
      imageSrc: "https://img.wattpad.com/cover/299036390-416-k731463.jpg",
      title: "The Unstella : Antagonist Talent",
      description: "Aku mengalami kecelakaan disaat-saat terbaik. Menjadi seorang chef terkenal dan menghasilkan banyak uang dengan sampingan menjadi seorang penulis handal adalah impianku. Namun, semua hilang saat jiwaku bereinkarnasi ke dunia lain, di tubuh yang berbeda sebagai seorang antagonis dalam novel romantis kerajaan. Petualangan ku dimulai, di Akademi Evergreen menjadi seorang antagonis.",
    },
    {
      link: "https://www.wattpad.com/1315907143-be-antagonist-to-protagonist-0-%2B-1-%C3%97-0",
      imageSrc: "https://img.wattpad.com/cover/334575559-416-k6554.jpg",
      title: "Be Antagonist to Protagonist",
      description: "Seorang gadis yang merasuki tubuh antagonis entah mengapa takdirnya di dalam dunia novel justru berpotensi untuk menjadi protagonis. Justru protagonis yang asli diperalat olehnya hanya untuk kesenangan dirinya sendiri dan seorang sahabat baru yang selalu mendukungnya ia jadikan sebagai antagonis. Hal mengejutkan lainnya adalah bahwa protagonis lelaki menjadi pacarnya. ",
    },
  ];

  

  return (
    <div className="mt-10">
      <button className="mb-5 ml-5 bg-lime-400 px-10 py-2 rounded-2xl">
        <Link to="/genre">Kembali</Link>
      </button>
      <h1 className="font-semibold text-center ml-5 text-3xl">Genre Fantasy</h1>

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

export default GenreFantasy;