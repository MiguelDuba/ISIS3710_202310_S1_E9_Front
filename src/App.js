import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import OfertaCreate from './components/oferta/ofertaCreate/OfertaCreate';
import OfertaDetail from './components/oferta/ofertaDetail/OfertaDetail';
import OfertaList from './components/oferta/ofertaList/OfertaList';
import Footer from './components/shared/footer/Footer';
import Login from './components/shared/login/Login';
import KangarooNavbar from './components/shared/navbar/KangarooNavbar';
import Home from './components/shared/startpage/Home';

function App() {
  return (
    <div className="App">
      <KangarooNavbar />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ofertas" element={<OfertaList />} />
            <Route path="/ofertas/new" element={<OfertaCreate />} />
            <Route path="/ofertas/:ofertaId" element={<OfertaDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/error" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

function PageNotFound () {
  return <div><h1>ERROR</h1></div>
}

export default App;
