import React,{Component} from 'react';
import './listings.css';
import $ from 'jquery';
import Listing from '../listing/listing';
export default class Listings extends Component{
  constructor(){
    super();
    this.state = {
      isFilterShowing: false,
      active:false,
      activeIndex: ''
    };
    this.showFilter = this.showFilter.bind(this);
    this.loopListings = this.loopListings.bind(this);

    this.submit = this.submit.bind(this);
    this.filteredData = this.filteredData.bind(this);
    this.setActive = this.setActive.bind(this);
    this.getClickedStatus = this.getClickedStatus.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  submit(){
    let city = document.getElementById('city-pick');
    let cityVal = city.options[city.selectedIndex].value;

    let minPrice = document.getElementById('min-price');
    let minPriceVal = minPrice.options[minPrice.selectedIndex].value;

    let maxPrice = document.getElementById('max-price');
    let maxPriceVal = maxPrice.options[maxPrice.selectedIndex].value;

    let minBeds = document.getElementById('min-beds');
    let minBedsVal = minBeds.options[minBeds.selectedIndex].value;

    let maxBeds = document.getElementById('max-beds');
    let maxBedsVal = maxBeds.options[maxBeds.selectedIndex].value;


    let minSqft = document.getElementById('min-sqft');
    let minSqftVal = minSqft.options[minSqft.selectedIndex].value;

    let maxSqft = document.getElementById('max-sqft');
    let maxSqftVal = maxSqft.options[maxSqft.selectedIndex].value;

    let minYr = document.getElementById('min-yr');
    let minYrVal = minYr.options[minYr.selectedIndex].value;

    let maxYr = document.getElementById('max-yr');
    let maxYrVal = maxYr.options[maxYr.selectedIndex].value;

    this.setState({
      city : cityVal,
      minPrice : minPriceVal,
      maxPrice: maxPriceVal,
      minSqft : minSqftVal,
      maxSqft : maxSqftVal,
      minYr : minYrVal,
      maxYr : maxYrVal,
    }, ()=>{
      this.filteredData();
    })

  }
  filteredData(){
    var data = this.props.listingsData;
    var {listingsData} = this.props;
    var newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.minPrice && item.price <= this.state.maxPrice
    });
    this.setState({
      filteredData: newData
    })
  }

  showFilter(){
    var listingsContent = document.getElementsByClassName('real-listings-content');
    var filterContent = document.getElementsByClassName('filter-content');
    var listingcontent = document.getElementsByClassName('listing-content');
    var titleArea = document.getElementsByClassName('title-area');
    this.setState(state => ({
      isFilterShowing: !state.isFilterShowing
    }));
    let text =  document.getElementsByClassName('filter-text')[0];
    var res = this.state.isFilterShowing? "Show More Filters":"Show Less Filters";
    text.innerHTML = res;
    filterContent[0].classList.toggle('slow');
    this.props.filterStatus(this.state.isFilterShowing);
  }
  handleClick(index){
    if(!this.state.active){
      this.setState({active: !this.state.active, activeIndex: index}, ()=>{
        this.props.activeIndex(this.state.activeIndex);
      });
    }
    else if(this.state.active && this.state.activeIndex !== index){
      this.setState({ activeIndex: index}, ()=>{
        this.props.activeIndex(this.state.activeIndex);
      });
    }
    else{
      this.setState({active: !this.state.active, activeIndex: ''}, ()=>{
        this.props.activeIndex(this.state.activeIndex);
      });
    }
  }
  loopListings(){
    /*deconstructing*/
    var {listingsData} = this.props;
    if(listingsData == undefined || listingsData.length == 0){
      displayWarning();
      return (
        <div class="error">
          <div class="error-title">
            <span>No Results!</span>
          </div>
          <div class="error-opt">
            <span><a onClick={this.props.reset}>Reset filter</a></span>
          </div>
        </div>
      );
    }
    return listingsData.map((listing, index) =>{
      undoWarning();
      let markerId = listing.id;
      let indx = this.props.listingsData.findIndex(m => m.id === markerId);
      const className = this.state.activeIndex === index ? 'module active' : 'module';
      return (
        <div class={className} onClick={()=>this.handleClick(indx)}>
          <Listing
            key={indx}
            listing={listing}
            index={indx}
          />
        </div>
      );
    })
  }
  getClickedStatus = (childData)=>{
    console.log(childData.index);
  }
  setActive(listing){
    console.log(listing.id);
  }
  render(){
    return(
      <div className="listing-content"  onScroll={a}>
        <div className="section title-area">
          <span className="title-text">California Real Estate & Homes For Sale</span>
          <div className="text-area-below">
            <span className="search-results-text"><span class="results-number">{this.props.results}</span> Results</span>
            <span className="filter-text" onClick={this.showFilter}>Show More Filters</span>
          </div>
        </div>
        <div class="real-listings-content">
          <div className="section listings-content-area">
            {this.loopListings()}
            <div class="filter-content slow">

            </div>
          </div>
          <div className="section footer-area">
            <div id="pagination">
              <div className="ar"><a className="pag-btns">1</a></div>
              <div className="ar"><a className="pag-btns">2</a></div>
              <div className="ar"><a className="pag-btns">3</a></div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
function a(){
  var content = document.getElementsByClassName('listing-content');
  var header = document.getElementsByClassName('title-area');
  var filterText = document.getElementsByClassName('filter-text');
  var sticky = header[0].offsetTop + 60;
  if (content[0].scrollTop > sticky){
    header[0].classList.add('fixed-header');
    // filterText[0].classList.add('fixed-header');
  }
  else{
    header[0].classList.remove('fixed-header');
    // filterText[0].classList.remove('fixed-header');
  }
}
function displayWarning(){
  $('listing-content').css('background','gray');
  $('.listings-content-area').css('display','inline-block');
}
function undoWarning(){
  $('.listings-content-area').css('display','grid');
}
