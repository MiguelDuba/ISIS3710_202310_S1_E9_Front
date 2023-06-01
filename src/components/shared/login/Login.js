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

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        window.location.reload();
      }
    }
  };

  return (
    <div  className="login-wrapper">
      <form  onSubmit={handleSubmit}>
        <label>
          <p><FormattedMessage id='email'/></p>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <p><FormattedMessage id='password'/></p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <Button type="submit"><FormattedMessage id='sign-in'/></Button>
        </div>
      </form>
        <div className="invalid-login">
          {!success && <FormattedMessage id="invalid-user" />}
        </div>
    </div>
  );
}
