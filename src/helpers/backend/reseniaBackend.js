import { BASE_URL } from "../constants";

export const getFullResenia = async function(reseniaId, token) {
  const requestReseniaPayload = {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    };
  return fetch(BASE_URL+"/resenias/"+reseniaId, requestReseniaPayload)
  .then((response) => response.json())
  .then((data) => data);
}

export const getReseniaByReceptor = async function(userId, token) {
    const requestReseniaPayload = {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      };
    return fetch(BASE_URL+"/usuarios/"+userId+"/resenias", requestReseniaPayload)
    .then((response) => response.json())
    .then((data) => data);
}

export const getAutorByResenia = async function(autorId, token) {
    const requestReseniaPayload = {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      };
    return fetch(BASE_URL+"/usuarios/"+autorId, requestReseniaPayload)
    .then((response) => response.json())
    .then((data) => data);
}