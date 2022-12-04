import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import profilePic from "../images/profile_pic.JPG";

export default class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="content">
          <div className="title">Hey There!</div>
          <div className="nametag">
            <div className="subtitle">I'm Chandler Eyre.</div>
            <img src={profilePic} />
          </div>
          <div className="subtitle">Welcome to the Art Market!</div>
          <p>I'm selling posters, shirts, and free digital wallpapers.</p>
          <div className="subtitle">Click a link to explore!</div>
        </div>
        {/* <div className='navbar'>
                <Link to="/wallpapers">Wallpapers</Link>
                <Link to="/products">Payment</Link>
                <Link to="/about">About Me</Link>
                </div> */}
      </div>
    );
  }
}
