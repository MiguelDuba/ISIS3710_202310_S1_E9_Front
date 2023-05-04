import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Footer from './components/shared/footer/Footer';
import Navbar from './components/shared/navbar/Navbar';
import { ofertaDetail } from './tempData/ofertaDetailData';

import OfertaDetail from './components/oferta/ofertaDetail/OfertaDetail';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <OfertaDetail info={ofertaDetail}/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
