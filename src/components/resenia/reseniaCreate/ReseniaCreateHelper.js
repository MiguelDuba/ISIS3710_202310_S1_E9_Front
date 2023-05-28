export const buildReseniaPayload = (resenia) => {

  console.log(resenia.calificacion);
  const calificacion = parseInt(resenia.calificacion); 

  return {
    titulo: resenia.titulo,
    calificacion: calificacion,
    descripcion: resenia.descripcion,
    receptor: getUser(),
    autor: getUser(),
  };
};

const getUser = () => {
  const localUsr = localStorage.getItem('userData');
  console.log('localUsr', localUsr);
  if (localUsr) {
    return JSON.parse(localStorage.getItem('userData')).id;
  }
  return false;
};