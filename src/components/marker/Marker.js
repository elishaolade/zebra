import React, { Component} from 'react'
import $ from 'jquery';
import './marker.css';

export default class Markers extends Component{
  constructor(){
    super();
    this.displayDetails = this.displayDetails.bind(this);
  }
  render(){
    return <div class="marker-container"><span>{this.props.value}</span></div>;
  }
  displayDetails(listing){
  }
}
