import React, { useState } from "react";
import "./Login.css"
import background from '../images/home-page-background.jpg';
import axios from "axios";

function Login() {

  const [input, setInput] = useState({
    user: '',
    pass: ''
  })
  function formInput(e) {
    const { name, value } = e.target
    setInput(() => ({ ...input, [name]: value }))
  }
  function formSubmit(e) {
    e.preventDefault();

    const newUser = {
      Username: input.user,
      Password: input.pass
    }
    axios.post("http://localhost:3001/login", newUser)
  }

  return (
    <div className="container">
      <div className="login-section">
        <div className="login">
          <form>
            <label className="login-form-label">Username</label>
            <input onChange={formInput} name='user' value={input.user} autoComplete="off" className="login-input-form" type="text" />
            <a className="forget-option">
              Forget username?
            </a>
          </form>
          <form>
            <label className="login-form-label">Password</label>
            <input onChange={formInput} name='pass' value={input.pass} autoComplete="off" className="login-input-form" type="password" />
            <a className="forget-option">
              Forget password?
            </a>
          </form>
          <button onClick={formSubmit} className="login-button">Login</button>
          <p className="login-text">
            Don't have an account?
            <a className="sign-up-option">
              Sign-up
            </a>
          </p>

        </div>
      </div>
    </div>

  );
}

export default Login;