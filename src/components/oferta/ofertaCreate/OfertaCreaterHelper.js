import dayjs from 'dayjs';

export const buildOfferPayload = (offer) => {
  return {
    precio: offer.price,
    disponible: true,
    tipoOferta: offer.offerType,
    fechaInicio: offer.initDate,
    fechaFin: offer.endDate,
    usuario: {
      id: getUser(),
    },
  };
};

export const buildSchedulePayload = (day, activeTimes) => {
  return {
    dia: day, 
    horaInicio: dayjs( activeTimes[day].start).format('YYYY-MM-DDTHH:mm:ssZ[Z]') , 
    horaFin: dayjs( activeTimes[day].end).format('YYYY-MM-DDTHH:mm:ssZ[Z]') ,
  };
};

const getUser = () => {
  return "id";
};
