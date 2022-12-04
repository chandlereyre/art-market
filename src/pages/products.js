import React, { Component } from "react";

export default class Products extends Component {
  render() {
    return (
      <div>
        <p className="subtitle">I'm selling:</p>
        <ul>
          <li>Shirts - $8</li>
          <li>Prints - $2</li>
          <li>Digital Wallpapers - Free! (Donations appreciated) </li>
        </ul>
        <div className="venmo-wrapper">
          <p className="subtitle">I take payments through Venmo.</p>
          <a
            className="page-link"
            href="https://account.venmo.com/u/Chandler-Eyre-1"
          >
            <button>Pay Here</button>
          </a>
          <p>Thanks!</p>
        </div>
      </div>
    );
  }
}
