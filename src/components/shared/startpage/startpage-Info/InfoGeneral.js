import "./InfoGeneral.css"

function InfoGeneral(){
    const items = [
        <div class="general--info--container">
            <div class="general--first--text">
                <h1 style={{ margin: '20px' }}>Uniendo familias y niñeras perfectas junto a Kangaroo</h1>
                <p>Solución fácil y segura donde familias encuentran niñeras altamente calificadas, mientras que a su vez, niñeras buscan oportunidades de trabajo en hogares que se ajustan a sus habilidades.</p>
                <button className="btn-t1" type="button">Únete</button>
            </div>
            <div class="general--family--image">
                <img src="https://cdn.discordapp.com/attachments/260148962948808705/1106280407130980453/Imagen2LandingPage.png" alt="Kangaroo Family"></img>
            </div>
        </div>,
        <div class="second--info--container">
            <div class="general--children--image">
                <img src="https://cdn.discordapp.com/attachments/260148962948808705/1113600096366497832/Imagen1LandingPage.png" alt="Kangaroo Children"></img>
            </div>
            <div class="general--second--text">
                <h3 style={{ margin: '10px' }}>Garantizamos seguridad y transparencia</h3>
                <p>Kangaroo te brinda tranquilidad con respecto a los usuarios dentro de nuestra plataforma.</p>
                <ul class="custom-list">
                    <li>Verificaciones de perfil</li>
                    <li>Documento de identidad oficial</li>
                    <li>Constancia Antecedentes Judiciales</li>
                    <li>Referencias</li>
                </ul>
            </div>
        </div>
    ];
    return (items);
}

export default InfoGeneral