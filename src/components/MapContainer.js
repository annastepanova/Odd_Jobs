import React from 'react'
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react'


export class MapContainer extends React.Component {


  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };




  displayMarkers = () => {

    return this.props.coordinates.map((point, index) => {

      return <Marker
        key={index} id={index}
        position={{
          lat: point.lat,
          lng: point.lng
        }}
        name={
          `${point.first_name} ${point.last_name}`
        }
        title={`${point.address}`}
        options={{ icon: { url: `${point.contractor_image}`, scaledSize: { width: 40, height: 40 } } }}


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
          lat: 25.7782,
          lng: -80.1868
        }}
        zoom={12}
        style={{
          width: '100%',
          height: '500px',

        }}>
        {this.displayMarkers()}


        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>

          <div>
            <h5>{this.state.selectedPlace.title}</h5>
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
