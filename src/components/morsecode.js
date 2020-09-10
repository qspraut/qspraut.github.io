import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MorseCode extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ind-project-page default-bg">
        <div className="back-button"><NavLink to="/projects"><button type="button" className="button-var-1"><i className="fas fa-undo" />Back</button></NavLink></div>
        <div className="ind-project-title">Morse Code Transmitter</div>
        <div className="ind-project-partners">Partner: Suraj Srivats</div>
        <div id="morsecode-img" />
        <div className="ind-project-mission">
          <span className="mission">Goal: </span>
          Build a large scale design that takes ASCII characters as input and outputs Morse code.
        </div>
        <div className="ind-project-desc">
          This program was done entirely in VHDL. It is composed of 13 individual code blocks that interact through component declarations and input/output signals.
          The ASCII characters are received through the UART protocol. The Morse code output is displayed both visually (LED) and through sound (speaker).
          Since this project required more time in designing and debugging than coding, we learned patience and how to write hardware-robust code.
        </div>
        <div className="link-to-project"><button type="button" className="button-var-1">GitHub Link Coming Soon</button></div>
      </div>
    );
  }
}

export default MorseCode;
