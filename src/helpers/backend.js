import { BASE_URL } from "./constants";

export const getToken = async function (credentials) {
  return fetch(BASE_URL + "/usuarios/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
};

export const getUserByEmail = async function (email) {
    const token = localStorage.getItem('sessionToken')
    
    if(!token) {
        return null
    }
    
    return fetch(`${BASE_URL}/usuarios/email/${email}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }).then(data => data.json())
}