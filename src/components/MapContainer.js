import React from 'react'
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react'


export class MapContainer extends React.Component {
  

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
 


  displayMarkers = () => {
     
    const first_name = this.props.contractors.map(contractor => contractor.first_name)
    const last_name = this.props.contractors.map(contractor => contractor.last_name)


    return this.props.coordinates.map((point, index) => {
     
      return <Marker
        key={index} id={index}
        position={{
          lat: point.lat,
          lng: point.lng
        }}
        name={
      `${first_name[Math.floor(Math.random() * first_name.length)]} ${last_name[Math.floor(Math.random() * last_name.length)]}`
        }
        title={'$22'}
      
        onClick={this.onMarkerClick}
        />

    })

  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    return (
      <Map google={this.props.google}
        onClick={this.onMapClicked}
        initialCenter={{
          lat: 25.7617,
          lng: -80.1918
        }}
        zoom={12}
        style={{
          width: '100%',
          height: '600px',

        }}>
        {this.displayMarkers()}
 

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div>
             <h3>{this.state.selectedPlace.title}</h3>
            <h3>{this.state.selectedPlace.name}</h3>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}
  

export default GoogleApiWrapper({
  apiKey: ('AIzaSyB1EAffcBClxJgB7TqI_FM7cuFLcvYk7-M')
})(MapContainer)
