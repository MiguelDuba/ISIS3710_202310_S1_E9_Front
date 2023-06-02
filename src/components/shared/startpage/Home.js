import UsuarioCreate from '../../usuario/usuarioCreate/usuarioCreate';
import InfoAcudiente from "./startpage-Info/InfoAcudiente";
import InfoCanguro from "./startpage-Info/InfoCanguro";
import InfoGeneral from "./startpage-Info/InfoGeneral";

function Home() {
  return (
    <>
      <InfoGeneral />
      <InfoCanguro />
      <InfoAcudiente />
      <UsuarioCreate />
    </>
  );
}

export default Home;
