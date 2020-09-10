import React from 'react';
import '../style.scss';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import Nav from './nav';
import Home from './home';
import About from './about';
import Contact from './contact';
import Projects from './projects';
import TouchTheFire from './touchthefire';
import QBlog from './qblog';
import CollabNotes from './collabnotes';
import Sudoku from './sudoku';
import VegetableQuiz from './vegetablequiz';
import MorseCode from './morsecode';

const FallBack = (props) => {
  return (
    <div id="url-not-found" className="default-bg">
      <div>Sorry, that page could not be found.</div>
      <div><NavLink to="/"><button type="button" className="button-var-1">Home</button></NavLink></div>
    </div>
  );
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="/touchthefire" component={TouchTheFire} />
          <Route path="/qblog" component={QBlog} />
          <Route path="/collabnotes" component={CollabNotes} />
          <Route path="/sudoku" component={Sudoku} />
          <Route path="/vegetablequiz" component={VegetableQuiz} />
          <Route path="/morsecode" component={MorseCode} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
