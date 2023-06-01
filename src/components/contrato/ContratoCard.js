function ContratoCard(){
    console.log('card', JSON.stringify(props))
    const userData = props.info.usuario;
    const contratoData = props.info;

    return (
        <div className="contratoCard">
          <a href="#">
            <div className="userInfo">
              <img
                src={userData.foto}
                rounded-circle
                alt={`${userData.name} profile`}  /* Me tiene que quedar igual que como le quedo a Maria las OfertaCard y OfertaList */
              ></img>
              <div className="userInfoTop">
                <h5>{userData.nombre}</h5>
                <p>{contratoData.actividad}</p>
              </div>
            </div>
            <div className="infoDiv">
              <span className="infoDiv--title">Precio por dia</span>
              {formatterCOP.format(contratoData.precio)}
              <span className="infoDiv--title">Fecha</span>
              {contratoData.fecha}
            </div>
          </a>
        </div>
      );
}

export default ContratoCard