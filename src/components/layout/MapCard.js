import React, { Component } from 'react';
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import ReactMapGL, { Marker } from 'react-map-gl';
import Pin from './Pin'

export default class MapCard extends Component {

  // state = {
  //   viewport: {
  //     latitude: 12.9791198,
  //     longitude: 77.5912997,
  //     zoom: 10
  //   }
  // };

    // setPosition = (lat, lon) => {
    //     this.setState({viewport: {latitude:lat, longitude:lon}});
    //   }
    
 render(){ 
    let position = [12.9791198, 77.5912997];
    if(this.props.weatherState.isLoaded) {
      position = [this.props.weatherState.weather.latitude, this.props.weatherState.weather.longitude];
      // this.setState({viewport: {latitude:position[0], longitude:position[1]}});
    } 
    return (
    <ReactMapGL
      latitude= {position[0]}
      longitude= {position[1]}
      zoom={10}
      width={600}
      height={350}
      interactive={false}
      dragPan={false}
      onViewportChange={(viewport) => this.setState({viewport})}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxApiAccessToken="pk.eyJ1IjoicmVkdmVsb2NpdHkiLCJhIjoiY2p1bDVzMmwzMXg5YjRkb2FjNXIwOWFnbCJ9.99QKd-qk4VJI4I8bj8rUWg"
    >
      <Marker 
        latitude= {position[0]}
        longitude= {position[1]}
        draggable= {false}
      >
        <Pin size={20}/>
      </Marker>
    </ReactMapGL>
  )
 }
}