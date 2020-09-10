import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class TouchTheFire extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ind-project-page default-bg">
        <div className="back-button"><NavLink to="/projects"><button type="button" className="button-var-1"><i className="fas fa-undo" />Back</button></NavLink></div>
        <div className="ind-project-title">TouchTheFire.io</div>
        <div className="ind-project-partners">Partners: Arjun Miklos, Bibaswan Khadka, Devon Chen, Scott Stuart, Suraj Srivats</div>
        <div id="touch-the-fire-img" />
        <div className="ind-project-mission">
          <span className="mission">Goal: </span>
          Provide a platform for Dartmouth students to interact with Dartmouth culture and each other during quarantine.
        </div>
        <div className="ind-project-desc">
          TouchTheFire is a multiplayer IO game that runs through Socket.io and Phaser. The game randomly assigns players into two teams. Teams accumulate points by
          spending time touching the fire. Whichever team has more points at the end of 3 minutes wins the game. Players can shoot, collect currency, and purchase powerups.
          There is an in-game chat and a leaderboard. This project also has authentication.
        </div>
        <div>***NOTE: Game may take a minute or so to start as the Heroku server boots up***</div>
        <div className="link-to-project"><a href="http://touch-the-fire.surge.sh/"><button type="button" className="button-var-1">Visit Site</button></a></div>
      </div>
    );
  }
}

export default TouchTheFire;
