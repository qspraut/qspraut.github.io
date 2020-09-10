import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav>
        <ul>
          <NavLink className="nav-link" to="/"><li className="nav-el"><i className="fas fa-home" /><span className="nav-label">Home</span></li></NavLink>
          <NavLink className="nav-link" to="about"><li className="nav-el"><i className="fas fa-user" /><span className="nav-label">About</span></li></NavLink>
          <NavLink className="nav-link" to="projects"><li className="nav-el"><i className="fas fa-project-diagram" /><span className="nav-label">Projects</span></li></NavLink>
          <NavLink className="nav-link" to="contact"><li className="nav-el"><i className="fas fa-envelope" /><span className="nav-label">Contact</span></li></NavLink>
        </ul>
      </nav>
    );
  }
}

export default Nav;
