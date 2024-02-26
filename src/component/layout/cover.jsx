/*             import Btr from "../../assets/img/btr.jpg";
            import Btw from "../../assets/img/btw.jpg";
            import Samuel from "../../assets/img/samuel.jpg";
            import Dgm from "../../assets/img/dgm.jpg";
            import Eccedentesiast from "../../assets/img/eccedentesiast.jpg";
            import Argantara from "../../assets/img/argantara.jpg";
            import Antares from "../../assets/img/antares.jpg";
            import Kerajaan from "../../assets/img/kerajaan.jpg";
            import Thewar from "../../assets/img/thewar.jpg";
            import Dok from "../../assets/img/dok.jpg";
            import Bh from "../../assets/img/bh.jpg";
            import Aot from "../../assets/img/aot.jpg";
            import Feverfew from "../../assets/img/feverfew.jpg";
            import Nera from "../../assets/img/nera.jpg";
            import Rtd from "../../assets/img/rtd.jpg";
            import Cg from "../../assets/img/cg.jpg";
            import P from "../../assets/img/p.jpg";
            import Alpha from "../../assets/img/alpha.jpg";
            import Survival from "../../assets/img/survival.jpg";
            import Kabiru from "../../assets/img/kabiru.jpg";
            import K from "../../assets/img/k.jpg";
            import Y from "../../assets/img/y.jpg";
            import F from "../../assets/img/f.jpg";
            import R from "../../assets/img/r.jpg";
            import G from "../../assets/img/g.jpg";
            import S from "../../assets/img/s.jpg";
            import D from "../../assets/img/mm.jpg";
            import Mq from "../../assets/img/mq.jpg";
            import Sm from "../../assets/img/sm.jpg";
            import "../../assets/css/genre.css";
import { Link } from "react-router-dom";

            function Cover() {
              return (
                  <div className="cover-container py-10 md:py-20 pl-5 md:pl-10 my-5 md:my-10 bg-slate-50 rounded-xl">
                      <div>
                          <h1 className="font-bold text-3xl md:text-4xl mb-5 md:mb-10 text-center">Cerita yang Tersedia</h1>
                      </div>
                      <div className="cover flex flex-wrap justify-center">
                          <Link to="/sinopsis/home1"  className="story-link">
                              <img className="mb-2" src={Btr} alt="btr" />
                              <h5 className="font-bold text-center">Behind The Rush</h5>
                          </Link>
                          <a href="https://www.wattpad.com/467219110-behind-the-wall-behind-the-wall-trilogy-1" className="story-link">
                              <img className="mb-2" src={Btw} alt="btw" />
                              <h5 className="font-bold text-center">Behind The Wall</h5>
                          </a>
                          <a href="https://www.wattpad.com/849606193-samuel-prolog" className="story-link">
                              <img className="mb-2" src={Samuel} alt="samuel" />
                              <h5 className="font-bold text-center">Samuel</h5>
                          </a>
                          <a href="https://www.wattpad.com/1264145100-diamond-gang-the-mission-tepat-satu-tahun" className="story-link">
                              <img className="mb-2" src={Dgm} alt="dgm" />
                              <h5 className="font-bold text-center">Diamond Gang <br/> The Mission</h5>
                          </a>
                      </div>
                    <div className="py-5 md:py-20 my-10 md:my-20 px-5 md:px-10 xl:mr-5 md:pl-10 rounded-3xl bg-lime-100">
                        <div className="flex flex-col md:flex-row">
                            <img className="mb-5 md:mr-5 md:mb-0" src={Kerajaan} alt="btr" />
                            <div className="md:ml-5">
                                <h5 className="font-bold text-3xl md:text-5xl mt-5 md:mt-0">Of Sea and Fire</h5>
                                <p className="mt-3 md:mt-5">
                                    Siren menjebak manusia untuk mengambil jantungnya.
                                    Lyra menyukai hidup di laut, tak pernah terpikir untuk naik ke permukaan.
                                    Hingga adiknya ditangkap pemburu, dan Lyra bersumpah untuk membalas kematian sang adik.
                                    Pemburu menangkap siren untuk melindungi manusia.
                                    Pada kasus Caspian, ia juga mencari monster yang telah membunuh keluarganya.
                                    Kalau perlu, laki-laki itu akan membinasakan semua siren di lautan hingga dendamnya terbalas.
                                    Ketika keduanya bertemu, batas antara pemburu dan yang diburu tak lagi jelas terlihat.
                                </p>
                                <a href="https://www.wattpad.com/1334329475-of-sea-and-fire-author%27s-note">
                                    <button className="bg-orange-500 py-3 px-5 md:py-4 md:px-8 rounded-full mt-5 md:mt-8 text-base md:text-lg text-white">Mulai Membaca</button>
                                </a>
                            </div>
                        </div>
                    </div>
                  <div>
                    <h1 className="font-bold text-2xl md:text-4xl mb-3 md:mb-8 ">Cerita pilihan untuk mu</h1>
                  </div>
                  <div className="cover flex flex-wrap justify-center">
                    <a href="https://www.wattpad.com/1334329475-of-sea-and-fire-author%27s-note">
                      <img className="mb-2" src={Mq} alt="abc" />
                      <h5 className="font-bold text-center">01.00</h5>
                    </a>
                    <a href="https://www.wattpad.com/1137785836-eccedentesiast-rahasia">
                      <img className="mb-2" src={ Eccedentesiast} alt="eccedentesiast" />
                      <h5 className="font-bold text-center">Eccedentesiast</h5>
                    </a>
                    <a href="https://www.wattpad.com/987010293-argantara-01-awal-dari-segalanya">
                      <img className="mb-2" src={Argantara} alt="argantara" />
                      <h5 className="font-bold text-center">Argantara</h5>
                    </a>
                    <a href="https://www.wattpad.com/740732094-antares-prolog">
                      <img className="mb-2" src={Antares} alt="dgm" />
                      <h5 className="font-bold text-center">Antares</h5>
                    </a>
                  </div>
                  <div className="p-10 md:py-20 md:my-40 md:px-20 lg:mr-10 lg:pl-20 rounded-3xl bg-lime-100">
                    <div className="flex flex-col md:flex-row">
                      <img className="mr-4 md:mr-8" src={Kabiru} alt="btr" />
                      <div>
                        <h5 className="font-bold text-3xl md:text-5xl mt-4 md:mt-0">Kabiru</h5>
                        <p className="mt-4 md:mt-6">Kabiru yang masih melajang di usia tiga puluh memikirkan pilihan yang paling logis di hadapannya. Namun ternyata, menikah dengan temannya sejak SMA--Fani--tidak semudah apa yang dipikirkan oleh Biru sebelum menjalaninya. Di umurnya yang mencapai kepala tiga, Kabiru dihadapkan dengan permasalahan yang terbilang klise, diminta mendatangkan calon istri ke rumah untuk dikenalkan kepada keluarganya</p>
                        <a href="https://www.wattpad.com/901374047-kabiru-bab-pengantar">
                          <button className="bg-orange-500 py-2 px-6 rounded-full mt-4 md:mt-6 text-base md:text-lg text-white">Mulai Membaca</button>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h1 className="font-bold text-2xl md:text-4xl mb-3 md:mb-8 ">Paling di gemari komunitas</h1>
                  </div>
                  <div className="cover flex flex-wrap justify-center">
                    <a href="https://www.wattpad.com/936724012-1-agent-of-thirteen-treasure-13-meet-with-member">
                      <img className="mb-2" src={Aot} alt="btr" />
                      <h5 className="font-bold text-center">Agent Of Thirteen</h5>
                    </a>
                    <a href="https://www.wattpad.com/1220727870-belenggu-hiro-haruto-terbit-prolog">
                      <img className="mb-2" src={Bh} alt="btw" />
                      <h5 className="font-bold text-center">Belenggu Hiro</h5>
                    </a>
                    <a href="https://wattpad.com/742307675-dead-or-kill-00-line-%E2%9C%93-prolog">
                      <img className="mb-2" src={Dok} alt="samuel" />
                      <h5 className="font-bold text-center">Dead or Kill</h5>
                    </a>
                    <a href="https://www.wattpad.com/1002082791-the-beginning-of-the-war-03-04-line-%E2%9C%93-%C3%B6ffnung">
                      <img className="mb-2" src={Thewar} alt="samuel" />
                      <h5 className="font-bold text-center">The Beginning Of The War</h5>
                    </a>
                  </div>
                  <div className="p-10 md:py-20 md:my-40 md:px-20 lg:mr-10 lg:pl-20 rounded-3xl bg-lime-100">
                   <div className="flex flex-col md:flex-row">
                    <img className="mr-4 md:mr-8" src={Survival} alt="btr" />
                    <div>
                     <h5 className="font-bold text-3xl md:text-5xl mt-4 md:mt-0">Survival Games</h5>
                     <p className="mt-4 md:mt-6"> dia mengerjapkan mata nya berulang kali sampai indera pendengaranya jelas,
                       semua yang ada di depan mata nya pun terlihat. gedung gedung bertingkat dalam kondisi setengah hancur, 
                       bahkan ada yang hancur, terlihat jels di mata nya. dia berbalik ke belakang, pohon pohon menjulang tinggi, 
                       ukurannya cukup besar dan berlumut, kabut tebal menutupi daerah yang berada jauh darinya, hari mulai gelap.</p>
                     <a href="https://www.wattpad.com/922547562-survival-games-i-land-%E2%9C%93-prolog">
                       <button className="bg-orange-500 py-2 px-6 rounded-full mt-4 md:mt-6 text-base md:text-lg text-white">Mulai Membaca</button>
                     </a>
                    </div>
                   </div>
                  </div>
                  <div>
                    <h1 className="font-bold text-2xl md:text-4xl mb-3 md:mb-8">Coba ini selanjutnya</h1>
                  </div>
                  <div className="cover flex flex-wrap justify-center">
                    <a href="https://www.wattpad.com/939437994-ii-feverfew-%E2%9C%93-%E2%9A%9C-einer">
                      <img className="mb-2" src={Feverfew} alt="samuel" />
                      <h5 className="font-bold text-center">Feverfew</h5>
                    </a>
                    <a href="https://www.wattpad.com/1386649952-ghost-class-1-%F0%9F%91%BB">
                      <img className="mb-2" src={Nera} alt="dgm" />
                      <h5 className="font-bold text-center">New Era</h5>
                    </a>
                    <a href="https://www.wattpad.com/1225816255-run-to-depok-terbit-voc-visual-of-cast">
                      <img className="mb-2" src={Rtd} alt="rdr" />
                      <h5 className="font-bold text-center">Run To Depok</h5>
                    </a>
                    <a href="https://www.wattpad.com/963007627-cursed-game-01-line-%E2%9C%93-intro">
                      <img className="mb-2" src={Cg} alt="samuel" />
                      <h5 className="font-bold text-center">Cursed Game</h5>
                    </a>
                  </div>
                  <div className="p-10 md:py-20 md:my-40 md:px-20 lg:mr-10 lg:pl-20 rounded-3xl bg-lime-100">
                   <div className="flex flex-col md:flex-row">
                    <img className="mr-4 md:mr-8" src={Alpha} alt="btr" />
                    <div>
                     <h5 className="font-bold text-3xl md:text-5xl mt-4 md:mt-0">Alpha Romeo</h5>
                     <p className="mt-4 md:mt-6">Bianca Dhanakitri tidak banyak bermimpi untuk menemukan pasangan yang sempurna
                       di umurnya yang ketiga puluh empat. Apalagi menjadi pasangan seorang pria tampan, perhatian, dan berkarir bagus seperti
                       Atilla-yang tujuh tahun lebih muda darinya. *** Bianca tidak merencanakan banyak hal untuk hidup di umurnya yang ketiga
                       puluh empat selain memiliki tempat tinggal sendiri dan resolusi untuk menonton</p>
                       <a href="https://www.wattpad.com/784416353-alpha-romeo-the-wattys-2020-winner-romance-alpha">
                         <button className="bg-orange-500 py-2 px-6 rounded-full mt-4 md:mt-6 text-base md:text-lg text-white">Mulai Membaca</button>
                       </a>
                    </div>
                   </div>
                  </div>
                  <div>
                    <h1 className="font-bold text-2xl md:text-4xl mb-3 md:mb-8">Temukan cerita favorit terbarumu</h1>
                  </div>
                  <div className="cover flex flex-wrap justify-center">
                    <a href="https://www.wattpad.com/1356115779-wanna-die-sweetheart-completed-%E2%9C%93-wds-01">
                      <img className="mb-2" src={P} alt="btr" />
                      <h5 className="font-bold text-center">Wanna Die Sweetheart?</h5>
                    </a>
                    <a href="https://www.wattpad.com/1368309564-transmigrasi-revaza-on-going-prolog">
                      <img className="mb-2" src={K} alt="btw" />
                      <h5 className="font-bold text-center">TRANSMIGRASI REVAZA </h5>
                    </a>
                    <a href="https://www.wattpad.com/1298948022-argala-galale-01g">
                      <img className="mb-2" src={Y} alt="samuel" />
                      <h5 className="font-bold text-center">Argala</h5>
                    </a>
                    <a href="https://www.wattpad.com/1275070681-atlas-prolog">
                      <img className="mb-2" src={F} alt="dgm" />
                      <h5 className="font-bold text-center">Atlas</h5>
                    </a>
                  </div>
                  <div className="p-10 md:py-20 md:my-40 md:px-20 lg:mr-10 lg:pl-20 rounded-3xl bg-lime-100">
                   <div className="flex flex-col md:flex-row">
                    <img className="mr-4 md:mr-8" src={Sm} alt="btr" />
                    <div>
                     <h5 className="font-bold text-3xl md:text-5xl mt-4 md:mt-0">Save Me</h5>
                     <p className="mt-4 md:mt-6">Moa Jatraji, seorang psikiater yang didatangkan ke boarding school SMA Elang setelah seorang anak bernama Cakrawala Sadawira hampir membunuh teman satu dorm-nya yang ternyata adalah anak anggota dewan. Namun semuanya menjadi semakin rumit ketika ternyata Cakrawala Sadawira mengingatkan Moa pada sosok dimasa lalunya.
                    <br/>
                       [#NOT ME 2].</p>
                     <a href="https://www.wattpad.com/1269002863-3-save-me-prolog">
                       <button className="bg-orange-500 py-2 px-6 rounded-full mt-4 md:mt-6 text-base md:text-lg text-white">Mulai Membaca</button></a>
                    </div>
                   </div>
                  </div>
                  <div>
                    <h1 className="font-bold text-2xl md:text-4xl mb-3 md:mb-8 ">Menyelam kedalam bacaan yang bagus</h1>
                  </div>
                  <div className="cover flex flex-wrap justify-center">
                    <a href="https://www.wattpad.com/1371033360-attar-king-devil-end-prolog">
                      <img className="mb-2" src={R} alt="samuel" />
                      <h5 className="font-bold text-center">ATTAR : KING DEVIL</h5>
                    </a>
                    <a href="https://www.wattpad.com/1339856129-algasya-step-brother-prolog">
                      <img className="mb-2" src={G} alt="dgm" />
                      <h5 className="font-bold text-center">ALGASYA ; STEP BROTHER</h5>
                    </a>
                    <a href="https://www.wattpad.com/story/245074059-danger-boy">
                      <img className="mb-2" src={S} alt="rdr" />
                      <h5 className="font-bold text-center">Danger boy</h5>
                    </a>
                    <a href="https://www.wattpad.com/1274846758-arzegas-perfect-demon-selesai-00-arzegas">
                      <img className="mb-2" src={D} alt="d" />
                      <h5 className="font-bold text-center">ARZEGAS Perfect Demon</h5>
                    </a>
                  </div>
                </div>
              );
            }
            export default Cover;
 */
 
            import Samuel from "../../assets/img/samuel.jpg";
            import React, { useState, useEffect } from 'react';
            import { Link } from 'react-router-dom';
            
            function Cover() {
              const [books, setBooks] = useState([]);
            
              useEffect(() => {
                fetch('http://localhost:3001/api/books')
                  .then((response) => response.json())
                  .then((data) => setBooks(data))
                  .catch((error) => console.error('Error fetching data:', error));
              }, []);
            
              return (
                <div className="cover-container py-10 md:py-20 pl-5 md:pl-10 my-5 md:my-10 bg-slate-50 rounded-xl">
                  <div>
                    <h1 className="font-bold text-3xl md:text-4xl mb-5 md:mb-10 text-center">Cerita yang Tersedia</h1>
                  </div>
                  <div className="cover flex flex-wrap justify-center">
                    {books.map((book) => (
                      <Link key={book.id} to={`/sinopsis/${book.id}`} className="story-link">
                        <img className="mb-2" src={book.image} alt={book.title} />
                        <h5 className="font-bold text-center">{book.title}</h5>
                      </Link>
                    ))}
                  </div>
                  {/* ... Your remaining JSX ... */}
                </div>
              );
            }
            
            export default Cover;
            