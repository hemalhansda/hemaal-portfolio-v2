import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import Paper from 'material-ui/Paper';
import Card from '@material-ui/core/Card';
// import Typography from 'material-ui/Typography';
// import { typography } from 'material-ui/styles';

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
  render() {
    const style = {
      width: '350px',
      height: '400px',
      borderRadius: '15px'
    }
    return (
      <Card>
        <Map
        item
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 14 }
        initialCenter = {{ lat: 22.570526, lng: 88.510707 }}
        >
            <Marker
            onClick = { this.onMarkerClick }
            title = { 'Changing Colors Garage' }
            position = {{ lat: 22.570526, lng: 88.510707 }}
            name = { 'Changing Colors Garage' }
            />
            {/* <InfoWindow
            marker = { this.state.activeMarker }
            visible = { this.state.showingInfoWindow }
            >
            </InfoWindow> */}
        </Map>
      </Card>
    );
  }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAelQIJF-2zT9SRPjv_keyWvFUIty5pyUE'
})(GoogleMapsContainer);