import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
  <nav className="navbar">
    <ul>
      <li><NavLink exact to="/services">Services</NavLink></li>
      <li><NavLink exact to="/services/support">Support</NavLink></li>
      <li><NavLink exact to="/register">Register</NavLink></li>
      <li><NavLink exact to="/login">Login</NavLink></li>
      <li><NavLink exact to="/results">Map</NavLink></li>
  
    </ul>
  </nav>
  )
}