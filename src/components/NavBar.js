import React from 'react'
import { NavLink } from 'react-router-dom'
import '../NavBar.css'

export default function NavBar() {
  return (
    <nav className="navbar">
      <NavLink exact to="/"><img className="logo" src="OddJobslogo.png" alt="logo" /></NavLink>
      <ul className="nav-list">
        <li><NavLink exact to="/services">Services</NavLink></li>
        <li><NavLink exact to="/services/support">Support</NavLink></li>
        <li><NavLink exact to="/contractors">Be a Contractor</NavLink></li>
        <li><NavLink exact to="/register">Login/Register</NavLink></li>
        <div className="nav-btn-list">
          <button className="translate-button">EN/ES</button>
          <button className="hire-button">HIRE</button>
        </div>
      </ul>
    </nav>
  )
}
