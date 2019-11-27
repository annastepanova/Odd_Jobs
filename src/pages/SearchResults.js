import React from "react";
import "../map.css";
import MapContainer from "../components/MapContainer";

const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1NzQ4OTc0MzV9.MegyQOt82QkMopNFUr3OQXTmCUuzk3ZfEG6excf1jBo"


class SearchResults extends React.Component {
  state = {
    coordinates: [],
    contractors: []
  };


  fetchContractor = () => {
    fetch('http://localhost:3000/contractors',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => response.json())
      .then(({ contractors }) => {

        this.setState({ contractors })
      })

  }

  fetchAddress = async () => {
    const contractors = await fetch('http://localhost:3000/contractors',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
    const data = await contractors.json()
    const requests = []
    for (let contractorIndex in data.contractors) {
      let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${data.contractors[contractorIndex].address},FL&key=AIzaSyB1EAffcBClxJgB7TqI_FM7cuFLcvYk7-M`
      requests.push(fetch(url))
    }
    const responses = await Promise.all(requests)
    const coordsArray = await Promise.all(responses.map(async response => (await response.json()).results[0].geometry.location))
    console.log(coordsArray)
    for (let coordsIndex in coordsArray) {
      data.contractors[coordsIndex] = { ...data.contractors[coordsIndex], ...coordsArray[coordsIndex] }
    }
    this.setState({ contractors: data.contractors })
  }



  componentDidMount() {
    this.fetchAddress()

  }

  render() {
    return (
      <>
        <div>
          <div style={{ position: 'relative', minHeight: '500px', marginTop: '50px', marginLeft: '150px', marginRight: '150px' }}>
            {
              <MapContainer
                coordinates={this.state.contractors}
              // contractors={this.state.contractors}
              />
            }
          </div>

        </div>


      </>
    )
  }
}

export default SearchResults;
