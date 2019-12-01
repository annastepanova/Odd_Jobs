import React, { Component } from "react";
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import StarRatingComponent from 'react-star-rating-component';
import '../rating.css'


class Rating extends Component {
  static contextType = AuthContext;
  state = { value: 1, review_text : '' }

  onStarClick = nextValue => this.setState({ value: nextValue })

  handleChange = e => this.setState({ review_text: e.target.value })

  handleSubmit = async e => {
    e.preventDefault()
    const { match, history } = this.props;
    const { contractorId } = match.params;
    await axios.post('https://oddjobs-api.herokuapp.com/ratings', { rating: { ...this.state, contractor_id: contractorId } }, { headers: { Authorization: this.context.token } })
    this.setState({ value: 1, review_text: '' })
    history.push(`/contractor/${contractorId}`)
  }


  render() {
    const { value: rating } = this.state;

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
          onStarClick={this.onStarClick}
        />
        </div>
        <form
        className="description"
        onSubmit={this.handleSubmit}>
        <input
          className="review"
          onChange={this.handleChange}
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
