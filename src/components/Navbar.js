import React, { Component } from 'react';
import logo from "../logo.png";

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar  fixed-top bg-info p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0 text-white"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          Web3 Network
        </a>
        <a>
          <img src = {logo} className ="App-logo" alt='logo' />
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-white"><span id="account">Logged in as - {this.props.account}</span></small>
          </li>
        </ul>
        
      </nav>
        
    );
  }
}
export default Navbar;