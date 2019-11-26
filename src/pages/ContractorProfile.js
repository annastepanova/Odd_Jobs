import React, { Component } from 'react'
import axios from 'axios'


const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1NzQ4MDg2OTF9.usrE_VY9qfVN6C7ygGhf0koehUIbVziBZx7x8Tzv24o"
const headers = { Authorization: `Bearer ${ACCESS_TOKEN}` }
export default class ContractorProfile extends Component {

  fetchProfile = async () => {
    const { match } = this.props;
    const requests = [
      axios.get(`/contractors/${match.params.id}`, { headers }),
    ];
    const [
      { data: contractorInfo }
    ] = await Promise.all(requests);
    console.log(contractorInfo)

  }

  componentDidMount() {
    this.fetchProfile()
  }
  render() {
    return (
      <div>
        <h1>Contractor Profile</h1>
      </div>
    )
  }
}
