function ContratoList(){
    console.log('card', JSON.stringify(props))
    const userData = props.info.user;
    const reseniaData = props.info.resenia;

    return (
        <div className="reseniaCard">
            <div className='userInfo' >
                <div class="rounded-circle">
                    <img src={userData.image} alt={`${userData.name} profile` }></img>
                </div>
                <div className="userInfoTop">
                    <h5>{userData.name}</h5>
                    {userData.offerType}
                </div>
            </div>
            <div className='infoDiv'>
                <div class="row">
                    <div class="col-md-auto margin-top: 5px">
                        <p><b>{reseniaData.titulo}</b></p>
                    </div>
                    <div class="col col-lg-2">
                        {reseniaData.calificacion}
                        <StarFill className="star-icon mx-2"/>
                    </div>
                </div>
                <p>{reseniaData.descripcion}</p>
            </div>
        </div>
    )
}

export default ContratoList;
