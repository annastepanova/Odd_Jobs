import React, { Component } from 'react'
import axios from 'axios'
import {Link, withRouter} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import './profile.css'


class ContractorProfile extends Component {
  static contextType = AuthContext;

  state = { contractorInfo: [], fetched: false }

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
    this.setState({ contractorInfo: data.contractor, fetched: true })
  }

  render() {
    const { contractorInfo } = this.state
    
    return (
      <>
      <div>
        <h1>Contractor Profile</h1>
      </div>
        <div className='profile-main'>
        <img className ="profile-pic" src={contractorInfo.contractor_image} alt="profilepic" />
        {contractorInfo.ratings && contractorInfo.ratings.map(i => (
          <div className="ratingDisplay" key={contractorInfo.id}>{i.value} </div>))}
        
        <div className="misc-info">
          <h4>English & Spanish</h4>
          <p>$22/hr</p>
        </div>
        <div className="hire-btn-now">
          <Link to="/calendar"><button className="hire-btn-now">Hire Now!</button></Link>
        </div>



        <div className="name-div">
        <p>{contractorInfo.first_name} {contractorInfo.last_name} {contractorInfo.background_check ? <img src="https://nexusipe-resource-exchange.s3.amazonaws.com/pictures/ambassador_large.png" className="badge" alt="bgcheck"></img> : "Not Yet Verified"}</p>
        </div>
        <div className="misc-info-desc">
        <p>6 years work experience</p>
        <p>Project Completions (22) </p>
        </div>
        </div>
      </>
    )
  }
}

export default withRouter(ContractorProfile)