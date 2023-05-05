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
      <UsuarioDetail nombreUsuario="Valerie Robertson" tipoUsuario="Canguro" aniosExperiencia={5} celular="3012455675" correoElectronico="v.robertson@gmail.com" caracteristicas={["Creatividad","Comunicación efectiva","Certificación en primeros auxilios y RCP"]} antecedentes={[]} foto="https://media.discordapp.net/attachments/1040862459378020502/1103425810448257125/Ellipse_3.png"/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
