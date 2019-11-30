import React, { Component } from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import './profile.css'


class ContractorProfile extends Component {
  static contextType = AuthContext;

  state = { contractorInfo: {}, fetched: false }

  componentDidMount() {
    this.context.token && this.fetchProfile();
  }

  componentDidUpdate() {
    const { fetched } = this.state;
    !fetched && this.context.token && this.fetchProfile()
  }

  fetchProfile = async () => {
    const { match } = this.props;
    const { data } = await axios.get(`http://localhost:3000/contractors/${match.params.id}`, { headers: { Authorization: this.context.token } })
    const avgRating = data.contractor.ratings.reduce((acc, rating) => acc + rating.value, 0) / data.contractor.ratings.length;
    this.setState({ contractorInfo: { ...data.contractor, avgRating }, fetched: true })
  }

  goBack = () => this.props.history.goBack();

  render() {
    const { match } = this.props;
    const { contractorInfo } = this.state
    const { id } = match.params
    return (
      <>
      <div>
        <button onClick={this.goBack} className="back-map">Back</button>
      </div>
      <div className="profile-container">
        <div className="profile-main">
        <div>
        <h2 className="specProfileHeader">Contractor Profile</h2>
      </div>
          <div>
          <img className="profile-img" src={contractorInfo.contractor_image} alt="profile-pic" />
          </div>
          {contractorInfo.ratings && contractorInfo.ratings.map(rating => (
            <div className="ratingDisplay" key={contractorInfo.id}>
              {[...Array(Math.floor(contractorInfo.avgRating || 0)).keys()].map(i =>
                <img src={"https://yakimaymca.org/wp-content/uploads/2018/11/Star.png"} key={`rating${i}`} className="badge commentRating" alt="starz" />
              )}
            </div>
          ))[0]}
        <div className="profile-desc">
        <h4>English & Spanish</h4>
        <p>$22/hr</p>
        </div>
        <div className="btn-list">
        <Link to="/calendar"><button className="hire-now-btn">Hire Now!</button></Link>
        <Link to={`/rating/${id}`}><button className="review-btn">Leave a Review</button></Link>
        </div>
        <div className="security-desc">
        <p>Always have a peace of mind! We ensure to always verify:</p>
        <img className="secure-badge" src="https://leo.nyc3.digitaloceanspaces.com/oddjobs/Group17.png" alt="secureimage" />
        <ul className="list-secure">
          <li>Background Checks</li>
          <li>ID Checks</li>
          <li>Secure Payments</li>
        </ul>
        </div>
        </div>
        <div className="profile-section2">
          <p className="profileName">{contractorInfo.first_name} {contractorInfo.last_name} {contractorInfo.background_check ? <img src="https://nexusipe-resource-exchange.s3.amazonaws.com/pictures/ambassador_large.png" className="badge" alt="bgcheck"></img> : ""}</p>
          <div className="misc-info">
          <p>6 years work experience</p>
          <p>Project Completions (22) </p>
          <i class="fal fa-images"></i>
          </div>
          <div className="projectImage-list">
            <img className="project-image" src="https://leo.nyc3.digitaloceanspaces.com/oddjobs/Group9.png" alt='project-before/after' />
            <img className="project-image" src="https://leo.nyc3.digitaloceanspaces.com/oddjobs/Group8.png" alt='project-before/after' />
          </div>
          <div className="review-section">
            <h4>Reviews:</h4>
          </div>
          {contractorInfo.ratings && contractorInfo.ratings.map(review => (
            <div className="userReview">
      
            {[...Array(Math.floor(review.value || 0)).keys()].map(i => <img src={"https://yakimaymca.org/wp-content/uploads/2018/11/Star.png"} key={`rating${i}`} className="badge commentRating" alt="starz" />)}
            <p className="commentRating">{review.review_text}</p>
            </div>
          ))}
        </div>
      </div>
      </>
    )
  }
}

export default withRouter(ContractorProfile)