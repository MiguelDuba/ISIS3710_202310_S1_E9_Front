import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import OfertaCreate from "./components/oferta/ofertaCreate/OfertaCreate";
import OfertaDetail from "./components/oferta/ofertaDetail/OfertaDetail";
import OfertaList from "./components/oferta/ofertaList/OfertaList";
import OfertaUserList from "./components/oferta/ofertaList/OfertaUserList";
import ReseniaCreate from "./components/resenia/reseniaCreate/ReseniaCreate";
import ReseniaList from "./components/resenia/reseniaList/ReseniaList";
import Footer from "./components/shared/footer/Footer";
import Login from "./components/shared/login/Login";
import KangarooNavbar from "./components/shared/navbar/KangarooNavbar";
import Home from "./components/shared/startpage/Home";
import UsuarioCreate from './components/usuario/usuarioCreate/usuarioCreate';
import UsuarioDetail from './components/usuario/usuarioDetail/UsuarioDetail';
import localeEnMessages from "./locales/en.json";
import localeEsMessages from "./locales/es.json";

const language = navigator.language || navigator.userLanguage;
let langStr = "en";
let messages = localeEnMessages;
if (language.includes("es")) {
  langStr = "es";
  messages = localeEsMessages;
}

function App() {
  return (
    <div className="App">
      <IntlProvider locale={langStr} messages={messages}>
        <KangarooNavbar />
        <main>
          <BrowserRouter>
            <Routes>
              <Route path="/ofertas" element={<OfertaList />} />
              <Route path="/ofertas/new" element={<OfertaCreate />} />
              <Route path="/ofertas/:ofertaId" element={<OfertaDetail />} />
              <Route path="/register" element={<UsuarioCreate />} />
              <Route path="/usuarios/:usuarioId" element={<UsuarioDetail />} />
              <Route path="/usuarios/:usuarioId/ofertas" element={<OfertaUserList />} />
              <Route path="/resenias/new" element={<ReseniaCreate />} />
              <Route path="/resenias/user" element={<ReseniaList />} />
              <Route path="/login" element={<Login />} />
              <Route path="/error" element={<PageNotFound />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </main>
        <Footer />
      </IntlProvider>
    </div>
  );
}

function PageNotFound() {
  return (
    <div>
      <h1>ERROR</h1>
    </div>
  );
}

export default App;
