import landing1 from "../../../../images/landingPage1.svg";
import landing2 from "../../../../images/landingPage2.svg";
import "./InfoGeneral.css";

function InfoGeneral(){
    const items = [
        <div class="general--info--container">
            <div class="general--first--text">
                <h1>Uniendo familias y niñeras perfectas junto a Kangaroo</h1>
                <p>Solución fácil y segura donde familias encuentran niñeras altamente calificadas, mientras que a su vez, niñeras buscan oportunidades de trabajo en hogares que se ajustan a sus habilidades.</p>
                <button className="btn-t1" type="button">Únete</button>
            </div>
            <div class="general--family--image">
                <img src={landing1} alt="Kangaroo Family"></img>
            </div>
            <div class="general--children--image">
                <img src={landing2} alt="Kangaroo Children"></img>
            </div>
            <div class="general--second--text">
                <h3>Garantizamos seguridad y transparencia</h3>
                <p>Kangaroo te brinda tranquilidad con respecto a los usuarios dentro de nuestra plataforma.</p>
                <ul class="custom-list">
                    <li>Verificaciones de perfil</li>
                    <li>Documento de identidad oficial</li>
                    <li>Constancia Antecedentes Judiciales</li>
                    <li>Referencias</li>
                </ul>
            </div>
        </div>,
    ];
    return (items);
}

export default InfoGeneral