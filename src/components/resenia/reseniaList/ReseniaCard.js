import { StarFill } from 'react-bootstrap-icons';
import './ReseniaCard.css';

function ReseniaCard(props) {
    console.log('card', JSON.stringify(props))
    const reseniaData = props.info.reseniaFullData;
    const autorData = reseniaData.autor;

    return (
        <div className="reseniaCard">
            <div className='userInfo' >
                <div class="rounded-circle">
                    <img src={autorData.foto} alt={`${autorData.nombre} profile` }></img>
                </div>
                <div className="userInfoTop">
                    <h5>{autorData.nombre}</h5>
                    {autorData.tipoUsuario}
                </div>
            </div>
            <div className='infoDiv'>
                <div>
                    <b>{reseniaData.titulo}</b>
                </div>
                <div class="col-lg-2">
                    {reseniaData.calificacion}
                    <StarFill className="star-icon"/>
                </div>
                <div>
                    {reseniaData.descripcion}
                </div>
            </div>
        </div>
    )
}

export default ReseniaCard