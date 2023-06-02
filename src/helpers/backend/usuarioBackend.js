import { BASE_URL } from "../constants";


const token = localStorage.getItem('sessionToken')

const basePayload = {
  method: "POST",
  headers: { "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`, },
}

export const getUsuarioById = async function(usuarioId) {
    console.log("Getting user by id...")
    return fetch(`${BASE_URL}/usuarios/${usuarioId}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
        }
      })
      .then((response) => response.json())
}