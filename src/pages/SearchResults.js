import React from 'react'
import '../map.css'
import MapContainer from '../components/MapContainer'

const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1NzQ2MTM5MzF9.j6vOMTsR4s67RPBYuujRH5AUrHFc3EXH6wfnJOoXIyc"

class SearchResults extends React.Component {
  state = {
   addresses: [],
   coordinates: [],
   contractors: []
  }


  fetchAddress = () => {
    fetch('http://localhost:3000/addresses',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => response.json())
      .then(data => {
       
       this.setState({ addresses: data })
      })

  }

  fetchContractor = () => {
    fetch('http://localhost:3000/contractors',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => response.json())
      .then(data => {
       const contractors = data.map(contractor => {
        return {
          first_name: contractor.first_name,
          last_name: contractor.last_name
        }
      })
       this.setState({ contractors })
       console.log(contractors)
      })

  }

  getLocationForAddress = () => {
    let coordArray = []

    this.state.addresses.map(address => {
      const street = address.street1
      let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${street},FL&key=AIzaSyB1EAffcBClxJgB7TqI_FM7cuFLcvYk7-M`
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          data.results.map(address => {
            
            const lat = address.geometry.location.lat
            const lng = address.geometry.location.lng
            const coordinates = {
              lat, lng
            }
            coordArray.push(coordinates)
            // console.log('DOES IT WORK???', coordinates)
     
          })
         
          this.setState({ coordinates: coordArray })
        }
         )
    }
     
    )} 
     
  componentDidMount() {
    this.fetchAddress()
    this.fetchContractor()
   
  }
      
render(){
  
  return(

    <div>
      
      <div style={{ position: 'relative', minHeight: '500px', marginTop: '50px', marginLeft: '490px', marginRight: '76px' }}>
        {
         
          <MapContainer
            coordinates={this.state.coordinates}
            contractors={this.state.contractors}
          />
        }
      </div>
      <button onClick={this.getLocationForAddress} className="rectangle-copy-2 search">Search</button>
    
    </div>
  )
}

  

}

export default SearchResults

