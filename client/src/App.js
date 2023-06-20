import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dominos from "./pages/Site/Dominos/Dominos"
import Pizza from "./pages/Site/Pizza/Pizza"
import Corek from "./pages/Site/Corek/Corek"
import Toyuq from "./pages/Site/Toyuq/Toyuq"
import Salat from "./pages/Site/Salat/Salat"
import Icki from "./pages/Site/Icki/Icki"
import Sirniyyat from "./pages/Site/Sirniyyat/Sirniyyat"
import Sous from "./pages/Site/Sous/Sous"
import Header from './layout/Site/Header/Header';
import Footer from "./layout/Site/Footer/Footer"
import Navbar from './layout/Site/Navbar/Navbar';
import Sobeler from './pages/Site/Sobeler/Sobeler';
import Izleme from './pages/Site/Izleme/Izleme';
import Haqqinda from './pages/Site/Haqqinda/Haqqinda';
import Sikayətlər from './pages/Site/Sikayətlər/Sikayətlər';
import Xidmet from './pages/Site/Xidmet/Xidmet';
import Gizlilik from './pages/Site/Gizlilik/Gizlilik';
import Elaqe from './pages/Site/Elaqe/Elaqe';
import Bizeqosul from './pages/Site/Bizeqosul/Bizeqosul';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Dominos/>}/>
      <Route path='/pizza' element={<Pizza/>}/>
      <Route path='/corek' element={<Corek/>} />
      <Route path='/toyuq' element={<Toyuq/>} />
      <Route path='/salat' element={<Salat/>} />
      <Route path='/icki' element={<Icki/>} />
      <Route path='/sirniyyat'  element={<Sirniyyat/>}/>
      <Route path='/sous' element={<Sous/>}/>
      <Route path='/şöbələr' element={<Sobeler/>} />
      <Route path='/izleme'  element={<Izleme/>}/>
      <Route path='/haqqında' element={<Haqqinda/>}/>
      <Route path='/şikayətlər' element={<Sikayətlər/>} />
      <Route path='/xidmət' element={<Xidmet/>} />
      <Route path='/gizlilik' element={<Gizlilik/>} />
      <Route path='/əlaqə' element={<Elaqe/>} />
      <Route path='/bizə_qoşul' element={<Bizeqosul/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
