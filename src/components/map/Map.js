/* eslint-disable no-undef */
/*global google*/
import React, { Component} from 'react'
import $ from 'jquery';
import './Map.css';

import GoogleMapReact from 'google-map-react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Markers from '../marker/Marker';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}></GoogleMap>
))
const AnyReactComponent = ({ text }) => <div class="marker-container"><span>{text}</span></div>;
export default class Map extends Component{
  constructor(){
    super();
    this.state={
      active: false,
      activeIndex: null
    }
    this.loopMarkers = this.loopMarkers.bind(this);
    this.printId = this.printId.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setActiveMarker = this.setActiveMarker.bind(this);
  }
  static defaultProps = {
    center: {
      lat: 33.85,
      lng: -118.26
    },
    zoom: 13
  };
  loopMarkers(){
    var listings = this.props.listings;
    if(listings == undefined || listings.length == 0){

    }
    else{
      return listings.map((listing,index) =>{
        const className = this.state.activeIndex === index ? 'marker-container active' : 'marker-container';
        return(
          <div class={className} onClick={()=>{this.handleClick(index)}} key={listing.id}   lat={listing.loc.lat} lng={listing.loc.lon} value={'$'+listing.price}><span>{firstThree(listing.price)}</span></div>
        )
      })
    }
  }
  printId(key, childProps){
    const markerId = childProps.marker.get('id');
    const index = this.props.listings.findIndex(m => m.get('id') === markerId);
    console.log(markerId);
  }
  handleClick(index){
    if(!this.state.active){
      this.setState({active: !this.state.active, activeIndex: index},()=>{
        this.props.activeIndex(this.state.activeIndex);
      });
    }
    else if(this.state.active && this.state.activeIndex !== index){
      this.setState({ activeIndex: index},()=>{
        this.props.activeIndex(this.state.activeIndex);
      });
    }
    else{
      this.setState({active: !this.state.active, activeIndex: ''},()=>{
        this.props.activeIndex(this.state.activeIndex);
      });
    }
  }
  setActiveMarker(index){
    if(this.state.active){
      this.setState({activeIndex: index})
    }
    else if(!this.state.active && this.state.activeIndex != index){
      this.setState({activeIndex: index})
      console.log(this.state.activeIndex)
    }
    else{
      this.setState({activeIndex: ''})
    }
  }
  render(){
    return(<div id="map" style={{ height: '100vh', width: '100%' }}>
    <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDu4mVMRyeWRISw4mAo0RAnDpMUjNspSoE'}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}>
            {this.loopMarkers()}
          </GoogleMapReact>

    </div>
  </div>);
  }
}
function firstThree(input){
  return ('$' + input.toString().substring(0,3)+'K');
}
