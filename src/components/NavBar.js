import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
  <nav className="navbar">
    <ul>
      <li><NavLink exact to="/services">Services</NavLink></li>
      <li><NavLink exact to="/services/support">Support</NavLink></li>
      <li><NavLink exact to="/register">Login/Register</NavLink></li>
    </ul>
  </nav>
  )
}