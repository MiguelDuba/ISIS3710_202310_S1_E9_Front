import { BASE_URL } from "../constants";


const token = localStorage.getItem('sessionToken')

const basePayload = {
  method: "POST",
  headers: { "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`, },
}

export const getOffers = async function () {
    return fetch(`${BASE_URL}/ofertas`)
    .then((response) => response.json())
    .then((data) => data);
}

export const getUserbyOffer = async function(offerId, userId) {
    return fetch(`${BASE_URL}/ofertas/${offerId}/usuarios/${userId}`)
    .then((response) => response.json())
    .then((data) => data);
}

export const getOfferById = async function(offerId) {
    //TODO check if token isnull
    return fetch(`${BASE_URL}/ofertas/${offerId}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
        }
      })
      .then((response) => response.json())
      .then((data) => data);
}

export const getOfferByUser = async function(userId) {
   return fetch(`${BASE_URL}/usuarios/${userId}/ofertas`)
    .then((response) => response.json())
    .then((data) => data);
}

export const createAndAssocSchedule = async function(schedulePayload, offerId) {
    const id = await fetch(BASE_URL + "/horarios", schedulePayload)
    .then((response) => response.json())
    .then((data) => data.id)

    if (!id) {
      return null
    }

    return fetch(`${BASE_URL}/ofertas/${offerId}/horarios/${id}`, basePayload)
      .then((response) => response.json())
      .then((data) => data.id);
}

