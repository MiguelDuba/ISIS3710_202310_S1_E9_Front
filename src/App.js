import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OfertaCreate from './components/oferta/ofertaCreate/OfertaCreate';
import OfertaDetail from './components/oferta/ofertaDetail/OfertaDetail';
import OfertaList from './components/oferta/ofertaList/OfertaList';
import UsuarioCreate from './components/usuario/usuarioCreate/usuarioCreate';
import UsuarioDetail from './components/usuario/usuarioDetail/UsuarioDetail';
// import ReseniaCreate from './components/resenia/reseniaCreate/ReseniaCreate';
// import ReseniaList from './components/resenia/reseniaList/ReseniaList';
// import CreateAccount from './components/shared/createAccount/createAccount';
import Login from './components/shared/login/Login';
import KangarooNavbar from './components/shared/navbar/KangarooNavbar';
import Footer from './components/shared/footer/Footer';
import { ofertaDetail, ofertaListData } from './tempData/ofertaData';
// import { reseniaListData } from './tempData/reseniaData';

function App() {
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
            <Route path="/usuarios/new" element={<UsuarioCreate />} />
            <Route path="/usuarios/:usuarioId" element={<UsuarioDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/error" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        
        {/* <OfertaDetail info={ofertaDetail}/>
        <OfertaCreate/>
        <OfertaList info={ofertaListData}/> */}
        {/* <UsuarioCreate/>Í */}
      </main>
      {/* <Footer/> */}
    </div>
  );
}

function PageNotFound () {
  return <div><h1>ERROR</h1></div>
}

export default App;
