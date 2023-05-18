import { BASE_URL } from "../constants";

export const getResenias = async function () {
    return fetch(`${BASE_URL}/resenias`)
    .then((response) => response.json())
    .then((data) => data);
}

export const getUserbyResenia = async function(reseniaId, userId) {
    return fetch(`${BASE_URL}/resenias/${reseniaId}/usuarios/${userId}`)
    .then((response) => response.json())
    .then((data) => data);
}