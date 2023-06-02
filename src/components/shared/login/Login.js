import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { getToken, getUserByEmail } from "../../../helpers/backend/backend";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [success, setSuccess] = useState(true);

  const nav = useNavigate();

  const handleSubmit2 = (e) => {
    console.log('loggingin')
    e.preventDefault();
    getToken({
      email: email,
      password: password,
      roles: "registeredUser",
    }).then((token) => {
      if(token.statusCode) {
        setSuccess(false);
      } else {
        localStorage.setItem("sessionToken", token.token);
        getUserByEmail(email).then((userData) => {
          localStorage.setItem("userData", JSON.stringify(userData));
          nav("/");
          window.location.reload();
        });
      }
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('loggingin')
    const token = await getToken({
      email: email,
      password: password,
      roles: "registeredUser",
    });
    console.log(token);
    if (token.statusCode) {
      console.log("Invalid User");
      setSuccess(false);
    } else {
      localStorage.setItem("sessionToken", token.token);
      const userData = await getUserByEmail(email);
      if (!userData) {
        console.log("error while getting user data (no token)");
      } else {
        localStorage.setItem("userData", JSON.stringify(userData));
        console.log(JSON.stringify(userData));
        nav("/")
        // window.location.reload();
      }
    }
  };

  return (
    <div  className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit2}>
        <label>
          <FormattedMessage id='email'/>
        </label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <label>
         <FormattedMessage id='password'/>
        </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        <div className="login-btn">
          <Button type="submit"><FormattedMessage id='sign-in'/></Button>
        </div>
      </form>
        <div className="invalid-login">
          {!success && <FormattedMessage id="invalid-user" />}
        </div>
    </div>
  );
}
