import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Footer from './components/shared/footer/Footer';
import KangarooNavbar from './components/shared/navbar/KangarooNavbar';
import UsuarioDetail from './components/usuario/usuarioDetail/UsuarioDetail';

function App() {
  return (
    <div className="App">
      <KangarooNavbar/>
      <UsuarioDetail NombreUsuario="Valerie Robertson" TipoUsuario="Canguro" AniosExperiencia={5}/>
      <Footer/>
    </div>
  );
}

export default App;
