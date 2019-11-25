import React, { Component } from 'react'
import axios from 'axios'


const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1NzQ4MDA0MTJ9.ZiiK4DYLnCB6samw3COd6y3s0bJKWwA4Xh2uk9q0v0g"
const headers = { Authorization: `Bearer ${ACCESS_TOKEN}` }
export default class ContractorProfile extends Component {

 fetchProfile = async () => {
    const { match } = this.props;
    const requests = [
        axios.get(`/contractors/${match.params.id}`, { headers }),
    ];
    await console.log(requests);
   
}

  componentDidMount(){
    this.fetchProfile()
  }
  render() {
    return (
      <div>
        <h1>Profile</h1>
      </div>
    )
  }
}
