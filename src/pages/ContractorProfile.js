import React, { Component } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext';

export default class ContractorProfile extends Component {
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
        <p>{contractorInfo.first_name} {contractorInfo.last_name}</p>
        <p>{contractorInfo.address}</p>
        <p>{contractorInfo.background_check ? <img src="https://nexusipe-resource-exchange.s3.amazonaws.com/pictures/ambassador_large.png" className="badge" alt="bgcheck"></img> : "Not Yet Verified"}</p>
      </div>
      
      </>
    )
  }
}