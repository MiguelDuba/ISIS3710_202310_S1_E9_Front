import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from "../../../helpers/constants";
import './Login.css';

async function loginUser(credentials) {
  console.log(JSON.stringify(credentials))
    return fetch(BASE_URL + "/usuarios/login", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
async function getUser(email) {
  const token = localStorage.getItem('sessionToken')
  const auth = `Bearer ${token}`
  return fetch(`${BASE_URL}/usuarios/email/${email}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': auth
    }
  }).then(data => data.json())
}
export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    
    const handleSubmit = async e => {
      e.preventDefault();
      const token = await loginUser({
        "email": email, 
        "password": password, 
        "roles": "registeredUser"
      });
      console.log(token)
      if (token.statusCode) {
        console.log('Invalid User')
      } else {
        localStorage.setItem('sessionToken', token.token)
        const userData = await getUser(email)
        localStorage.setItem('userData', JSON.stringify(userData))
        console.log(JSON.stringify(userData))
        navigate('/')
      }
    }
      
  return(
    <form className='login-wrapper' onSubmit={handleSubmit}>
      <label>
        <p>Email</p>
        <input type="text" onChange={e => setEmail(e.target.value)}/>
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={e => setPassword(e.target.value)} />
      </label>
      <div>
        <Button type="submit">Entrar</Button>
        
      </div>
    </form>
  )
}