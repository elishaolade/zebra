import React,{Component} from 'react';
import $ from 'jquery';
export default class Listing extends Component{
  constructor(){
    super();
    this.state = {
      active: false
    }
    this.moduleClicked = this.moduleClicked.bind(this);
    this.isActive = this.isActive.bind(this);
  }
  moduleClicked(){

  }
  active(){
    if(this.state.active){
      $('.module').css('background','#c5f4e2');
    }
    else{
      $('.module').css('background','transparent');
    }
  }
  isActive(){
    this.setState({active: !this.state.active},()=>{
      this.active();
    })
    console.log(this.state.active)
  }
  render(){
    return <div className="module" onClick={()=>{this.moduleClicked()}}>
      <div className="img" style={{
        background: `url("${this.props.listing.img}") center center/100%`
      }}></div>
      <div className="details">
        <span className="detail-txt price">$ {numberWithCommas(this.props.listing.price)}</span>
        <span className="detail-txt specs">{this.props.listing.beds} beds {this.props.listing.bathrooms} bathrooms</span>
        <span className="detail-txt address">{this.props.listing.address}</span>
      </div>
    </div>;
  }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
