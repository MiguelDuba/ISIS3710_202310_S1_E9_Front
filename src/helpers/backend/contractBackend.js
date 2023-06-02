import { BASE_URL } from "../constants";

export const getFullContract = async function (contratoId, token) {
  const requestContractPayload = {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    };
  return fetch(BASE_URL+"/contratos/"+contratoId, requestContractPayload)
  .then((response) => response.json())
  .then((data) => data);
}

export const getContractByReceptor = async function (userId, token) {
  const requestContractPayload = {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`, },
    };
  return fetch(`${BASE_URL}/usuarios/${userId}/contratos`, requestContractPayload)
      .then((response) => response.json())
      .then((data) => data);
}