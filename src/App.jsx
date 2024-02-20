import './App.css';
import Home from './component/pages/home';
import Home1 from './component/sinopsis/home1';
import Genre from './component/pages/genre';
import Fantasy from './component/genre/genreFantasy';
import Adventure from './component/genre/genreAdventure';
import Roman from './component/genre/genreRoman';
import Horror from './component/genre/genreHorror';
import Adventures1 from './component/sinopsis/adventures1';
import Fantasys1 from './component/sinopsis/fantasys1';
import Horrors1 from './component/sinopsis/horrors1';
import Romans1 from './component/sinopsis/romans1';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/genre" element={<Genre />}/>
        <Route path="/genre/fantasy" element={<Fantasy />}/>
        <Route path="/genre/adventure" element={<Adventure />}/>
        <Route path="/genre/roman" element={<Roman />}/>
        <Route path="/genre/horror" element={<Horror />}/>
        <Route path="/sinopsis/adventures1" element={<Adventures1 />}/>
        <Route path="/sinopsis/fantasys1" element={<Fantasys1 />}/>
        <Route path="/sinopsis/romans" element={<Romans1 />}/>
        <Route path="/sinopsis/horrors1" element={<Horrors1 />}/>
        <Route path="/sinopsis/home1" element={<Home1 />}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
