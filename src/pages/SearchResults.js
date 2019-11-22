import React from 'react'

const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1NzQ1MTg2ODN9.w_XCtdyOg15wv04DQobxtKBVOyuwwk8HMusWy-CUmCM"

class SearchResults extends React.Component {
  state = {
   addresses: [],
   coordinates: []
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
            console.log('DID IT WORK???', coordinates)
     
          })
         
          this.setState({ coordinates: coordArray })
        }
         )
    }
     
    )} 
     
  componentDidMount() {
    this.fetchAddress()
   
  }
      
render(){
  
  return(

    <div>
      <button onClick={this.getLocationForAddress}>Hit me!</button>
      {
        

        this.state.addresses.map(address => (
          <div>
            <h1>{address.street1}</h1>
          </div> ))

      }
    </div>
  )
}

  

}

export default SearchResults

