import React, { Component } from 'react';

import './HomepageAsset/homepage.css';
import pic from './HomepageAsset/pic.png';
import Navigation from '../Navigation'

class Footer extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="wrap">
          <h1>
            Welcome to the Chuck Jones Administrative Homepage!
          </h1>
          <h2>
            <img src={pic} className="App-logo" alt="logo" />
          </h2>
        </div>
      </div>
      
    );
  }
}

export default Footer;
