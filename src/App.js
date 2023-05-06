import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Footer from './components/shared/footer/Footer';
import KangarooNavbar from './components/shared/navbar/KangarooNavbar';
import UsuarioDetail from './components/usuario/usuarioDetail/UsuarioDetail';
import UsuarioCreate from './components/usuario/usuarioCreate/usuarioCreate';

function App() {
  return (
    <div className="App">
      <KangarooNavbar/>
      <main>
        <UsuarioCreate/>
      </main>
    </div>
  );
}

export default App;
