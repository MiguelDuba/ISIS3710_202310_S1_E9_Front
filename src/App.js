import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Footer from './components/shared/footer/Footer';
import KangarooNavbar from './components/shared/navbar/KangarooNavbar';
import UsuarioDetail from './components/usuario/usuarioDetail/UsuarioDetail';
import CreateAccount from './components/shared/createAccount/createAccount';

function App() {
  return (
    <div className="App">
      <KangarooNavbar/>
      <main>
        <CreateAccount/>
      </main>
    </div>
  );
}

export default App;
