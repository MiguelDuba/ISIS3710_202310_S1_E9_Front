import dayjs from 'dayjs';

export const validateOfferData = (offer) => {
  console.log(dayjs(offer.initDate), dayjs(offer.endDate))
  if (dayjs(offer.initDate).isBefore(dayjs(), 'day')) {
    console.log('invalid init')
    return false
  } 
  if (dayjs(offer.endDate).isBefore(dayjs(offer.initDate))) {
    console.log('invalid end')
    return false
  } 
  return true
}

export const validateScheduleData = (activeDay) => {
  const initTime = dayjs(activeDay.start, 'HH:mm:ss')
  const endTime = dayjs(activeDay.end, 'HH:mm:ss')
  if(endTime.isBefore(initTime)){
    return false
  }
  return true
}

export const buildOfferPayload = (offer) => {
  if (!getUser()){
    return false
  }
  return {
    precio: parseInt(offer.price),
    disponible: true,
    tipoOferta: offer.offerType,
    fechaInicio: dayjs(offer.initDate).toDate(),
    fechaFin: dayjs(offer.endDate).toDate(),
    usuario: {
      id: getUser(),
    },
  };
}


export const buildSchedulePayload = (day, activeTimes) => {
  return {
    dia: day, 
    horaInicio: dayjs( activeTimes[day].start).toDate() , 
    horaFin: dayjs( activeTimes[day].end).toDate() ,
  };
};

const getUser = () => {
  const localUsr = localStorage.getItem('userData')
  if(localUsr) {
    return JSON.parse(localStorage.getItem('userData')).id;
  }
  return false
};