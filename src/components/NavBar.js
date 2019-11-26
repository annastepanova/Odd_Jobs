import React from 'react'
import { NavLink } from 'react-router-dom'
import '../NavBar.css'

export default function NavBar() {
  return (
  <nav className="navbar">
    <ul className="nav-list">
      <li><NavLink exact to="/"><img className="logo" src="OddJobslogo.png" alt="logo" /></NavLink></li>
      <li><NavLink className="services-tab" exact to="/services">Services</NavLink></li>
      <li><NavLink className="link-tabs" exact to="/services/support">Support</NavLink></li>
      <li><NavLink className="contractor-tab"exact to="/contractor_register">Be a Contractor</NavLink></li>
      <li><NavLink className="login-tab" exact to="/login">Login/Register</NavLink></li>
      <div className="nav-btn-list">
        <button className="translate-button">EN | ES</button>
        <NavLink to="/services"><button className="hire-button">HIRE</button></NavLink>
      </div>
    </ul>
  </nav>
  )
}
