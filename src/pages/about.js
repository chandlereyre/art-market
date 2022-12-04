import React, { Component } from "react";
import outdoorsPic from "../images/outdoors.jpg";
import swimmingPic from "../images/swimming.jpg";
import wings from "../images/wings.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <p className="subtitle">I'm a Senior from American Fork High School.</p>
        <p>
          I enjoy art (duh), but I also do a bunch of other things, like
          computer programming, outdoorsy stuff, and competitive swimming.
        </p>
        <p>
          If I'm not at the market right now, it's because I'm at swim practice!
          I'm going to a big meet in St. George this weekend :)
        </p>

        <p>Here are some pictures of me doing super cool stuff:</p>
        <div className="images">
          <img src={outdoorsPic} alt="me at a lake" loading="lazy" />
          <img src={swimmingPic} alt="swimming" loading="lazy" />
          <img src={wings} alt="wings picture" loading="lazy" />
        </div>
      </div>
    );
  }
}
