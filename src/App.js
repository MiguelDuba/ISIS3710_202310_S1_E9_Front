import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import OfertaDetail from './components/oferta/ofertaDetail/OfertaDetail';
import Footer from './components/shared/footer/Footer';
import KangarooNavbar from './components/shared/navbar/KangarooNavbar';
import { ofertaDetail } from './tempData/ofertaDetailData';

function App() {
  return (
    <div className="App">
      <KangarooNavbar/>
      <main>
        <OfertaDetail info={ofertaDetail}/>
      </main>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
