import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getToken, getUserByEmail } from '../../../helpers/backend/backend';
import { BASE_URL } from "../../../helpers/constants";
import './Login.css';

export default function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    
    const handleSubmit = async e => {
      e.preventDefault();
      const token = await getToken({
        email: email, 
        password: password, 
        roles: "registeredUser"
      })
      console.log(token)
      if (token.statusCode) {
        console.log('Invalid User')
        // TODO show on screen
      } else {
        localStorage.setItem('sessionToken', token.token)
        const userData = await getUserByEmail(email)
        if (!userData) {
          console.log('error while getting user data (no token)')
        }
        else {
          localStorage.setItem('userData', JSON.stringify(userData))
          console.log(JSON.stringify(userData))
          window.location.reload()
        }
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