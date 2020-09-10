import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="homepage" className="default-bg">
        <div id="bio-face-wrapper">
          <div id="bio-wrapper">
            <div id="name">
              Quinn Spraut
            </div>
            <div className="bio-text">
              Dartmouth College class of 2022
            </div>
            <div className="bio-text">
              Computer Science & Economics Double Major
            </div>
            <div id="homepage-buttons">
              <NavLink to="about"><button type="button" className="button-var-1">About</button></NavLink>
              <NavLink to="projects"><button type="button" className="button-var-1">Projects</button></NavLink>
              <NavLink to="contact"><button type="button" className="button-var-1">Contact</button></NavLink>
            </div>
          </div>
          <div id="face" />
        </div>
      </div>
    );
  }
}

export default Home;
