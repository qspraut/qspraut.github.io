import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';

const About = (props) => {
  return <div> All there is to know about me </div>;
};
const Welcome = (props) => {
  return <div>Welcome</div>;
};
const Projects = (props) => {
  return <div> If I had projects, this is where I would put them...</div>;
};
const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};
const ColorTest = (props) => {
  return <div> You clicked on color: {props.match.params.color} </div>;
};
const FallBack = (props) => {
  return <div>URL Not Found</div>;
};
const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
        <li><NavLink to="/color/purple">Purple</NavLink></li>
        <li><NavLink to="/color/green">Green</NavLink></li>
      </ul>
    </nav>
  );
};
const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/test/:id" component={Test} />
          <Route exact path="/color/:color" component={ColorTest} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('main'));
