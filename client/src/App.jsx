import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar'
import Results from './components/Results'

export default function App() {
  return(
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/restaurants/:location/:term?" component={Results}/>
      </Switch>
    </Router>
  )
}
