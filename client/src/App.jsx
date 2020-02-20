import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import NavBar from './components/Pages/NavBar';
import About from './components/Pages/About-Us';
import Results from './components/Pages/Results';
import Munchies from './components/Pages/Munchies';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/restaurants/:location/:term?" component={Results} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/restaurant/:id" component={Munchies} />
      </Switch>
    </Router>
  );
}
