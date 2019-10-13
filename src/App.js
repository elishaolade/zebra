/*global google*/
import React, {Component} from 'react';
import logo from './logo.svg';
import Header from './components/header/header';
import Filter from './components/filter/filter';
import Listings from './components/listings/listings';
import Map from './components/map/Map';
import listingsData from './data/listing_data.js';
import $ from 'jquery';
import './App.css';
const google = window.google;

class App extends Component{
  constructor(){
    super();
    this.state = {
      listingsData,
      values: {
        minPrice:0,
        maxPrice:1000000,
        city:'All',
        garage:false,
        pool:false,
        maxBeds:10,
        minBeds:0,
        maxBaths:5,
        minBaths:0,
        waterfront:false,
        basement:false,
        minSqft: 0,
        maxSqft:50000,
      },
      results:listingsData.length,
      filteredData:listingsData,
      isFilterShowing: false,
      activeListingExists: false,
      activeListingIndex: ''
    }
    this.filteredData = this.filteredData.bind(this);
    this.getFilterStatus = this.getFilterStatus.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.getValues = this.getValues.bind(this);
    this.resetValues = this.resetValues.bind(this);
    this.getId = this.getId.bind(this);
    this.getActiveListing = this.getActiveListing.bind(this);
  }
  filteredData(){
    var newData = this.state.listingsData.filter((item)=>{
      return item.sqft >= this.state.values.minSqft && item.sqft <= this.state.values.maxSqft &&
             item.price >= this.state.values.minPrice && item.price <= this.state.values.maxPrice &&
             item.beds >= this.state.values.minBeds && item.beds <= this.state.values.maxBeds &&
             item.bathrooms >= this.state.values.minBaths && item.bathrooms <= this.state.values.maxBaths;
    });
    if(this.state.values.city != 'All'){
      newData = newData.filter((item)=>{
        return item.city == this.state.values.city;
      })
    }
    /*Update state*/
    this.setState({
      filteredData: newData,
      results: newData.length
    }, () => {
      // this.setMarkers();
    })
    this.hide();
  }

  getFilterStatus = (childData)=>{
    this.setState({isFilterShowing:childData},()=>{
      if(!this.state.isFilterShowing){
        this.show();
      }
      else{
        this.hide();
      }
    })
  }
  show(){
    $("#filter").show(500);
  }
  hide(){
    $("#filter").hide(500);
  }
  populatehtmlForms(){

  }
  resetValues(){
    console.log('resetValues');
    const values = {
      minPrice:0,
      maxPrice:1000000,
      city:'All',
      garage:false,
      pool:false,
      maxBeds:10,
      minBeds:0,
      maxBaths:5,
      minBaths:0,
      waterfront:false,
      basement:false,
      minSqft: 0,
      maxSqft:50000,
    }
    /*Update selects*/
    $('#city-select').val('');
    $('#min-price-select').val('');
    $('#max-price-select').val('');
    $('#min-beds-select').val('');
    $('#max-beds-select').val('');
    $('#min-baths-select').val('');
    $('#max-baths-select').val('');
    $('#min-sqft-select').val('');
    $('#max-sqft-select').val('');
    $('#garage-checkbox').prop('checked', false);
    $('#pool-checkbox').prop('checked', false);
    $('#waterfront-checkbox').prop('checked', false);
    $('#basement-checkbox').prop('checked', false);
    /*Update state*/
    this.setState({
      values:values,
    }, () => {
      this.filteredData();
    })
  }
  getValues(){
    console.log('getValues')
    /*Get values and store into object*/
    const values = {
      city: $('#city-select').val()===null?'All':$('#city-select').val(),
      minPrice:$('#min-price-select').val()===null?0:$('#min-price-select').val(),
      maxPrice:$('#max-price-select').val()===null?1000000:$('#max-price-select').val(),
      minBeds:$('#min-beds-select').val()===null?0:$('#min-beds-select').val(),
      maxBeds:$('#max-beds-select').val()===null?10:$('#max-beds-select').val(),
      minBaths:$('#min-baths-select').val()===null?0:$('#min-baths-select').val(),
      maxBaths:$('#max-baths-select').val()===null?5:$('#max-baths-select').val(),
      minSqft:$('#min-sqft-select').val()===null?0:$('#min-sqft-select').val(),
      maxSqft:$('#max-sqft-select').val()===null?10000:$('#max-sqft-select').val(),
      garage:$('#garage-checkbox').is(":checked"),
      pool:$('#pool-checkbox').is(":checked"),
      waterfront:$('#waterfront-checkbox').is(":checked"),
      basement: $('#basement-checkbox').is(":checked"),
    }
    /*Update state*/
    this.setState({
      values:values,
    }, () => {
      this.filteredData()
    })
  }
  getId(){

  }
  getActiveListing = (index)=>{
    if(index != null){
      this.setState({activeListingExists: true, activeListingIndex: index},()=>{
        console.log(this.state.activeListingIndex);
      })
    }
    else{
        this.setState({activeListingExists: false, activeListingIndex: ' '});
    }
  }
  render(){
    return (
      <div className="App">
        <header>
          <div class="left">
            <ul>
              <li>
                <a className="logo">zebra</a>
              </li>
            </ul>
          </div>

          <div class="right">
            <ul>
              <li className="easy">
                <a>1-844-888-7773</a>
              </li>
              <li className="easy">
                <a>Buy</a>
              </li>
              <li className="easy">
                <a>Sell</a>
              </li>
              <li className="login btn">
                <a>Log In</a>
              </li>
              <li className="signup btn">
                <a>Sign Up</a>
              </li>
            </ul>
          </div>
          <div class="icon" onClick={()=>{displayDropdown()}}>
            <i class="fa fa-bars"></i>
          </div>
        </header>
        <div class="dropdown hide">
          <ul>
            <li>
              <a>Buy</a>
            </li>
            <li>
              <a>Sell</a>
            </li>
            <li>
              <a>Log In</a>
            </li>
            <li>
              <a>Sign Up</a>
            </li>
          </ul>
        </div>
        <div class="bottom-section">
          <div id="listings"><Listings active={this.state.active} index={this.state.activeIndex} activeIndex={this.getActiveListing} filterStatus={this.getFilterStatus}
          listingsData={this.state.filteredData} reset={this.resetValues} results={this.state.results}/></div>
           <div id="filter"><Filter values={this.getValues} reset={this.resetValues} /></div>
          <div id="map">
          <Map active={this.state.active} index={this.state.activeIndex} activeIndex={this.getActiveListing} markers={this.state.markers} listings={this.state.filteredData} mapMarkers={this.state.markers}/>
        </div>
        </div>
      </div>
    );
  }
}
function displayDropdown(){
  let dropdown = document.getElementsByClassName('dropdown')[0];
  dropdown.classList.toggle('show')
}
function displayActivePick(){

}
export default App;
