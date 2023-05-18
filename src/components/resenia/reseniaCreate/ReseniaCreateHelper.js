export const buildReseniaPayload = (resenia) => {
    if (!getUser()){
      return false
    }
    return {
        titulo: resenia.titulo, 
        calificacion: resenia.calificacion, 
        descripcion:  resenia.descripcion, 
        autor: {
            id: getUser(),
        },
    };
  };
  
  const getUser = () => {
    const localUsr = localStorage.getItem('userData')
    if(localUsr) {
      return JSON.parse(localStorage.getItem('userData')).id;
    }
    return false
  };