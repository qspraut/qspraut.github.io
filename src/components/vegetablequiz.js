import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class VegetableQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ind-project-page default-bg">
        <div className="back-button"><NavLink to="/projects"><button type="button" className="button-var-1"><i className="fas fa-undo" />Back</button></NavLink></div>
        <div className="ind-project-title">Vegetable Quiz</div>
        <div className="ind-project-partners">Partners: None</div>
        <div id="vegetablequiz-img" />
        <div className="ind-project-mission">
          <span className="mission">Goal: </span>
          Mimic a BuzzFeed style quiz to learn how to use basic JavaScript.
        </div>
        <div className="ind-project-desc">
          The vegetable quiz asks the user a series of questions. Once the user has answered all questions and presses the submit button, a modal appears
          telling the user the results of the quiz. These results are calculated within JavaScript and displayed on the webpage. Various basic animations
          are incorporated throughout the page.
        </div>
        <div className="link-to-project"><a href="https://dartmouth-cs52-20x.github.io/lab2-quizzical-qspraut/"><button type="button" className="button-var-1">Visit Site</button></a></div>
      </div>
    );
  }
}

export default VegetableQuiz;
