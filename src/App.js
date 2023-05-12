import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import OfertaCreate from './components/oferta/ofertaCreate/OfertaCreate';
import OfertaDetail from './components/oferta/ofertaDetail/OfertaDetail';
import OfertaList from './components/oferta/ofertaList/OfertaList';
import Footer from './components/shared/footer/Footer';
import KangarooNavbar from './components/shared/navbar/KangarooNavbar';
import UsuarioCreate from './components/usuario/usuarioCreate/usuarioCreate';
import UsuarioDetail from './components/usuario/usuarioDetail/UsuarioDetail';
import { ofertaDetail, ofertaListData } from './tempData/ofertaData';

function App() {
  return (
    <div className="App">
      <KangarooNavbar/>
      <main>
        <OfertaDetail info={ofertaDetail}/>
        <OfertaCreate/>
        <OfertaList info={ofertaListData}/>
        {/* <UsuarioCreate/>Í */}
      </main>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
