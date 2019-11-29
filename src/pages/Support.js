import React from 'react'
import "../support.css";
import TECH_SUPPORT_IMAGE from '../images/tech_support_image.png';

class Support extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      messages: [],
      currentTime: new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
      time: []
    }
    this.inputRef = React.createRef();
  }
 

  handleChange(e) {
    this.setState({
      message: e.target.value
    })
  }


  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state.message)
    this.sendMessage(this.state.message)
    this.currentTime()
    this.setTime(this.state.currentTime)
    this.inputRef.current.value = ''

  }


    sendMessage = (text) => {
      this.setState(
        {messages: [...this.state.messages, text]}
      )
      }
   
    currentTime = () => {
    this.setState({currentTime: new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})})
    }

    setTime = (time) => {
      this.setState(
        {time: [...this.state.time, time]}
      )
    }


  
  render() {
    
    return (
     <>
      <div className="chatbox_container">
      <div className="contacts">
       <h1>Customer Support</h1>
       <h1 className="grey">E: support@oddjobs.com</h1>
       <h1 className="grey">T: 1.800.555.67.80</h1>
      </div> 
      <div className="chatbox">
      <div className="time">
      <h2 className="header">TODAY</h2>
      {this.state.time.map((time, index) => {
        return(
          <h2 className="header" key={index}>{time}</h2>
      )})}
      </div>
      <div className="message">
      <h2 className="text header">Hello, How can we assist you?</h2>
      {this.state.messages.map((message, index) => {
        return(
          <h2 className="text header" key={index}>{message}</h2>
      )})}
      </div>
      </div>
      <form
        onSubmit={this.handleSubmit}
        className="send-message-form">
        <input
          className="input_message"
          onChange={(event) => this.handleChange(event)}
          ref={this.inputRef}
          placeholder="Type your message and hit ENTER"
          type="text" />
      </form>
      </div>
       <img src={TECH_SUPPORT_IMAGE} alt="techsupport" className="image" />
      </>
    )
  
  }
}
    

export default Support