import React from 'react';
import './header.css';
function Header() {
  return (
    <header>
    <div className="tr">
      <div className="td first">
        <span>zebra</span>
      </div>
      <div className="td center">
      </div>
      <div className="td last">
        <a className="btn login" href="#">Log In</a>
        <a className="btn signup" href="#">Sign Up</a>
      </div>
    </div>
  </header>
  );
}

export default Header;
