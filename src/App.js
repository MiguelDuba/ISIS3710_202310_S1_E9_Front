import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import OfertaCreate from './components/oferta/ofertaCreate/OfertaCreate';
import OfertaDetail from './components/oferta/ofertaDetail/OfertaDetail';
import OfertaList from './components/oferta/ofertaList/OfertaList';
// import ReseniaCreate from './components/resenia/reseniaCreate/ReseniaCreate';
// import ReseniaList from './components/resenia/reseniaList/ReseniaList';
import Footer from './components/shared/footer/Footer';
import Login from './components/shared/login/Login';
import KangarooNavbar from './components/shared/navbar/KangarooNavbar';
import UsuarioCreate from './components/usuario/usuarioCreate/usuarioCreate';
import UsuarioDetail from './components/usuario/usuarioDetail/UsuarioDetail';
import { ofertaDetail, ofertaListData } from './tempData/ofertaData';
// import { reseniaListData } from './tempData/reseniaData';

function App() {
  const [token, setToken] = useState()
  return (
    <div className="App">
      <KangarooNavbar/>
      <main>
      <BrowserRouter>
          <Routes>
            <Route path="/"  />
            <Route path="/ofertas" element={<OfertaList />} />
            <Route path="/ofertas/new" element={<OfertaCreate />} />
            <Route path="/ofertas/:ofertaId" element={<OfertaDetail />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
        
        {/* <OfertaDetail info={ofertaDetail}/>
        <OfertaCreate/>
        <OfertaList info={ofertaListData}/> */}
        {/* <UsuarioCreate/>Í */}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
