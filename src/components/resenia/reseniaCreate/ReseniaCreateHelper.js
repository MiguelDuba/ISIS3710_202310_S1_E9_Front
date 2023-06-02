export const buildReseniaPayload = (resenia) => {

  const calificacion = parseInt(resenia.calificacion); 

  return {
    titulo: resenia.titulo,
    calificacion: calificacion,
    descripcion: resenia.descripcion,
    receptor: resenia.receptor,
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