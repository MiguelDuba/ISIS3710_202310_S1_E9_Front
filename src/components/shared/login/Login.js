import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { BASE_URL } from "../../../helpers/constants";
import './Login.css';

async function loginUser(credentials) {
  console.log(JSON.stringify(credentials))
    return fetch(BASE_URL + "/usuarios/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          'email': username,
          'password': password, 
          'roles': 'registeredUser'
        });
        localStorage.setItem('sessionToken', token)
      }
      
  return(
    <form className='login-wrapper' onSubmit={handleSubmit}>
      <label>
        <p>Email</p>
        <input type="text" onChange={e => setUsername(e.target.value)}/>
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={e => setPassword(e.target.value)} />
      </label>
      <div>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  )
}