import React, { Component } from "react";
import StarRatingComponent from 'react-star-rating-component';
import '../rating.css'


class Rating extends Component {
  constructor() {
    super();

    this.state = {
      rating: 1,
      message: ''
    }
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
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
    event.target.reset()
    this.setState({ rating: 1 })

  }

  sendMessage = (text) => {
      this.setState(
        {message: text}
      )
      }


  render() {
    const { rating } = this.state;

    return (
      <div className="rating-container">
      <h1 className="description">We value your feedback.</h1>
      <h1 className="description">It helps us improve. Feedback is shared with HQ only.</h1>
        <h1 className="description">How would you rate contractor overall?</h1>
        <div className="description wrap">
        <StarRatingComponent 
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
        </div>
        <form
        className="description"
        onSubmit={this.handleSubmit}>
        <input
          className="review"
          onChange={(event) => this.handleChange(event)}
          ref={this.inputRef}
          placeholder="How did your contractor do?"
          type="text" />
          <button className="submit-btn">Submit</button>
      </form>
      </div>
    );
  }
}



export default Rating
