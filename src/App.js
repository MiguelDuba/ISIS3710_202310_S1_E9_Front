import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Footer from './components/shared/footer/Footer';
import KangarooNavbar from './components/shared/navbar/KangarooNavbar';
import InfoAcudiente from './components/startpage-Info/InfoAcudiente';
import InfoCanguro from './components/startpage-Info/InfoCanguro';

function App() {
  return (
    <div className="App">
      <InfoAcudiente/>
      <InfoCanguro/>
    </div>
  );
}

export default App;
