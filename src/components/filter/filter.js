import React, { Component} from 'react'
import './filter.css';
import $ from 'jquery';
export default class Filter extends Component{
  constructor(){
    super();
    this.state = {
      name: 'Eli',
      city: 'All',
    }
  }
  render(){
    return(
      <div class="container">
        <div class="selection-area">

          <div className="city-select">
            <div className="select">
              <select id="city-select">
                <option value="" disabled selected>City</option>
                <option value="All">All</option>
                <option value="Carson">Carson</option>
                <option value="Compton">Compton</option>
              </select>
              <div class="select__arrow"></div>
            </div>
          </div>

          <div className="double price-select">
            <div className="select">
              <select id="min-price-select">
                <option value="" disabled selected>Minimum Price</option>
                <option value="0">0</option>
                <option value="100000">100K</option>
                <option value="200000">200K</option>
                <option value="300000">300K</option>
                <option value="400000">400K</option>
                <option value="500000">500K</option>
              </select>
              <div class="select__arrow"></div>
            </div>
            <div className="txt"><span>to</span></div>
            <div className="select">
              <select id="max-price-select">
                <option value="" disabled selected>Maximum Price</option>
                <option value="0">0</option>
                <option value="200000">200K</option>
                <option value="300000">300K</option>
                <option value="400000">400K</option>
                <option value="500000">500K</option>
                <option value="600000">600K</option>
                <option value="700000">700K</option>
                <option value="800000">800K</option>
                <option value="900000">900K</option>
                <option value="1000000">1M</option>
              </select>
              <div class="select__arrow"></div>
            </div>
          </div>

          <div className="double bed-select">
            <div className="select">
              <select id="min-beds-select">
                <option value="" disabled selected>Minimum Beds</option>
                <option value="0">0+ BR</option>
                <option value="1">1+ BR</option>
                <option value="2">2+ BR</option>
                <option value="3">3+ BR</option>
              </select>
              <div class="select__arrow"></div>
            </div>
            <div className="txt"><span>to</span></div>
            <div className="select">
              <select id="max-beds-select">
                <option value="" disabled selected>Minimum Beds</option>
                <option value="0">0+ BR</option>
                <option value="1">1+ BR</option>
                <option value="2">2+ BR</option>
                <option value="3">3+ BR</option>
              </select>
              <div class="select__arrow"></div>
            </div>
          </div>

          <div className="double bed-select">
            <div className="select">
              <select id="min-baths-select">
                <option value="" disabled selected>Minimum Baths</option>
                <option value="0">0+ BT</option>
                <option value="1">1+ BT</option>
                <option value="2">2+ BT</option>
                <option value="3">3+ BT</option>
              </select>
              <div class="select__arrow"></div>
            </div>
            <div className="txt"><span>to</span></div>
            <div className="select">
              <select id="max-baths-select">
                <option value=""disabled selected>Maximum Baths</option>
                <option value="0">0+ BT</option>
                <option value="1">1+ BT</option>
                <option value="2">2+ BT</option>
                <option value="3">3+ BT</option>
              </select>
              <div class="select__arrow"></div>
            </div>
          </div>


          <div className="double price-select">
            <div className="select">
              <select id="min-sqft-select">
                <option value="" disabled selected>Minimum Sqft</option>
                <option value="500">500sqft</option>
                <option value="1000">1000sqft</option>
                <option value="2000">2000sqft</option>
                <option value="3000">3000sqft</option>
                <option value="4000">4000sqft</option>
                <option value="5000">5000sqft</option>
                <option value="6000">6000sqft</option>
                <option value="7000">7000sqft</option>
                <option value="8000">8000sqft</option>
                <option value="9000">9000sqft</option>
                <option value="10000">10000sqft</option>
              </select>
              <div class="select__arrow"></div>
            </div>
            <div className="txt"><span>to</span></div>
            <div className="select">
              <select id="max-sqft-select">
                <option value="" disabled selected>Maximum Sqft</option>
                <option value="1000">1000sqft</option>
                <option value="2000">2000sqft</option>
                <option value="3000">3000sqft</option>
                <option value="4000">4000sqft</option>
                <option value="5000">5000sqft</option>
                <option value="6000">6000sqft</option>
                <option value="7000">7000sqft</option>
                <option value="8000">8000sqft</option>
                <option value="9000">9000sqft</option>
                <option value="11000">11000sqft</option>
                <option value="12000">12000sqft</option>
                <option value="13000">13000sqft</option>
                <option value="14000">14000sqft</option>
                <option value="15000">15000sqft</option>
                <option value="16000">16000sqft</option>
                <option value="17000">17000sqft</option>
                <option value="18000">18000sqft</option>
                <option value="19000">19000sqft</option>
                <option value="20000">20000sqft</option>
                <option value="21000">21000sqft</option>
              </select>
              <div class="select__arrow"></div>
            </div>
          </div>

        </div>
        <div class="checkbox-area">
          <input id="garage-checkbox"type="checkbox"/>
          <label>Garage</label>
          <input id="pool-checkbox"type="checkbox"/>
          <label>Pool</label>
          <input id="waterfront-checkbox"type="checkbox"/>
          <label>Waterfront</label>
          <input id="basement-checkbox"type="checkbox"/>
          <label>Basement</label>
        </div>

        <div class="buttons">
          <div class="btn-container">
            <button class="sec reset" onClick={this.props.reset}>Reset</button>
            <div class="btwn"></div>
            <button class="sec apply" onClick={this.props.values}>Apply</button>
          </div>
        </div>
      </div>
    );
  }
}
