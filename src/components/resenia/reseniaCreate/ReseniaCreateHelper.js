export const buildReseniaPayload = (resenia) => {
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
    return "id";
  };