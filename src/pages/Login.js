import React, { Component } from "react"
import '../login_page.css'
import { Link } from "react-router-dom"

class Login extends Component {

  state = {
      email: "",
      password: ""
    }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    }


  render () {
    return(
      <>
      <div className="container">
      <form className="form" onSubmit={(event) => this.handleOnSubmit(event)}>
       <h1>Login</h1>
       <hr/>
        <label htmlFor="email" class="email">Email:</label>
        <br />
        <input
          name="email"
          id="email"
          type="email"
          value={this.state.email}
          onChange={(event) => this.handleChange(event)}
          autocomplete="off"
        />
        <br /> <br />
        <label htmlFor="password">Password: </label>
        <br />
        <input
          name="password"
          id="password"
          type="password"
          value={this.state.password}
          onChange={(event) => this.handleChange(event)}
          />
        <br /><br />
        <div className="button_container">
        <Link to="/">
        <button className="login_button login">Login</button>
        </Link> 
        <button className="register_button register">Register</button> 
        </div>
      </form>
      </div>
       <footer className="footer">
          <div>
            <p>Conditions of Use Privacy ©2019, Odd Jobs, Inc.</p>
          </div>
        </footer>
        </>
    )
  }
  
}

export default Login