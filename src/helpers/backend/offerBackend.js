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

export const getFullOffersList = function () {
  return fetch(`${BASE_URL}/ofertas`)
    .then((response) => response.json())
    .then((data) => {
      return Promise.all( 
        data.map((offer) => {
          return getUserbyOffer(offer.id, offer.usuario.id).then((userData) => {
            return { ...offer, usuario: userData}
          })
        })
      ).then((res) => res)
    });
}

export const getUserbyOffer = async function(offerId, userId) {
    return fetch(`${BASE_URL}/ofertas/${offerId}/usuarios/${userId}`)
    .then((response) => response.json())
    .then((data) => data);
}

export const getOfferById = async function(offerId) {
    return fetch(`${BASE_URL}/ofertas/${offerId}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
        }
      })
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

