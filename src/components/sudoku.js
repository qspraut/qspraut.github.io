import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Sudoku extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ind-project-page default-bg">
        <div className="back-button"><NavLink to="/projects"><button type="button" className="button-var-1"><i className="fas fa-undo" />Back</button></NavLink></div>
        <div className="ind-project-title">Sudoku Generator</div>
        <div className="ind-project-partners">Partners: Garrett Andreine, Luc Cote</div>
        <div id="sudoku-img" />
        <div className="ind-project-mission">
          <span className="mission">Goal: </span>
          Build a program that creates sudoku puzzles with unique solutions and solves sudoku puzzles.
        </div>
        <div className="ind-project-desc">
          This program was primarily done in C. The graphical display was done in Python.
          The project was broken down into three main components: a creator, a solver, and a shared library module.
          The creator is responsible for outputting a sudoku puzzle which has one unique solution.
          The solver takes a puzzle as an input and solves it if possible.
          The library contains a variety of functions that both the creator and solver use, as well as class definitions.
        </div>
        <div className="link-to-project"><a href="https://github.com/GarretAnd/Sudoku-Proj"><button type="button" className="button-var-1">GitHub Link</button></a></div>
      </div>
    );
  }
}

export default Sudoku;
