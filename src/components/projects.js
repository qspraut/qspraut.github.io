import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="projects" className="default-bg">
        <div id="projects-top">
          <div>
            <NavLink to="/touchthefire" className="nav-link">
              <div className="project-card">
                <div id="touchthefire" className="project-img" />
                <div className="project-title">TouchTheFire.io</div>
                <div className="project-desc">Multiplayer IO Game</div>
              </div>
            </NavLink>
          </div>
          <div>
            <NavLink to="/qblog" className="nav-link">
              <div className="project-card">
                <div id="qblog" className="project-img" />
                <div className="project-title">QBlog</div>
                <div className="project-desc">Create, Edit, and Share Posts</div>
              </div>
            </NavLink>
          </div>
          <div>
            <NavLink to="/collabnotes" className="nav-link">
              <div className="project-card">
                <div id="collabnotes" className="project-img" />
                <div className="project-title">Collaborative Notes</div>
                <div className="project-desc">Live Updating Bulletin Board</div>
              </div>
            </NavLink>
          </div>
        </div>
        <div id="projects-center">
          Click on a card to view the project.
        </div>
        <div id="projects-bottom">
          <div>
            <NavLink to="/sudoku" className="nav-link">
              <div className="project-card">
                <div id="sudoku" className="project-img" />
                <div className="project-title">Sudoku Generator</div>
                <div className="project-desc">Create and Solve Puzzles</div>
              </div>
            </NavLink>
          </div>
          <div>
            <NavLink to="/vegetablequiz" className="nav-link">
              <div className="project-card">
                <div id="vegetablequiz" className="project-img" />
                <div className="project-title">Vegetable Quiz</div>
                <div className="project-desc">BuzzFeed Style Quiz</div>
              </div>
            </NavLink>
          </div>
          <div>
            <NavLink to="/morsecode" className="nav-link">
              <div className="project-card">
                <div id="morsecode" className="project-img" />
                <div className="project-title">Morse Code Transmitter</div>
                <div className="project-desc">Translate ASCII to Morse</div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
