import React, { Component } from 'react'
import axios from 'axios'

export default class ContractorProfile extends Component {

  state = { contractorInfo: [] }

  headers = { Authorization: sessionStorage.getItem('AUTH_TOKEN') }

  componentDidMount() {
    this.fetchProfile()
  }

  fetchProfile = async () => {
    const { match } = this.props;
    const { data } = await axios.get(`http://localhost:3000/contractors/${match.params.id}`, { headers: this.headers })
    this.setState({ contractorInfo: data.contractor })
  }

  render() {
    const { contractorInfo } = this.state
    return (
      <div>
        <h1>Contractor Profile</h1>
        <p>{contractorInfo.first_name} {contractorInfo.last_name}</p>
        <p>{contractorInfo.address}</p>
        <p>{contractorInfo.background_check ? <img src="https://nexusipe-resource-exchange.s3.amazonaws.com/pictures/ambassador_large.png" className="badge"></img> : "Not Yet Verified"}</p>

      </div>
    )
  }
}
