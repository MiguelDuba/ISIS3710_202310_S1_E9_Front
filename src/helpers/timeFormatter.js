import dayjs from "dayjs";

export const formatOfferTime = (schedule) => {
    const init = dayjs(schedule.horaInicio).format('ha')
    const end = dayjs(schedule.horaFin).format('ha')
    return `${schedule.dia} ${init}-${end}` 
}