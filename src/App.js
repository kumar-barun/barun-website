import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Skill from "./components/Skill";
import MyWork from "./components/MyWork";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Nav />

        <Switch>
          <Route path="/skills">
            <Skill title="Skills - Barun Kumar" />
          </Route>
          <Route path="/my-work">
            <MyWork title="My Works - Barun Kumar" />
          </Route>
          <Route path="/education">
            <Education title="Education - Barun Kumar" />
          </Route>
          <Route path="/contact">
            <Contact title="Contact - Barun Kumar" />
          </Route>
          <Route path="/">
            <Home title="Barun Kumar | Front End Developer | PHP Developer" />
          </Route>
        </Switch>
      </div>
      <a
        className="fork-on-github"
        href="https://github.com/kumar-barun"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github @kumar-barun
      </a>
    </div>
  );
}

export default App;
