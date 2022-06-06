import "./NavBar.css"
import React from "react"
import { Link } from "react-router-dom"

function NavBar() {
  return <nav className='Nav-bar'>
    <Link exact to="/">
      <div className="menu-tab" >
        <p className="menu-text">
          Home
        </p>
      </div>
    </Link>
    <Link exact to="/login">
      <div className="menu-tab" >
        <p className="menu-text">
          Login
        </p>
      </div>
    </Link>
    <Link exact to="/sign-up">
      <div className="menu-tab" >
        <p className="menu-text">
          Sign-up
        </p>
      </div>
    </Link>

  </nav>

}

export default NavBar;
