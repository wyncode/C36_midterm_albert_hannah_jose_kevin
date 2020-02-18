import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Pages/Home';
import NavBar from './components/Pages/NavBar'
import About from './components/Pages/About-Us'
import Results from './components/Pages/Results'

export default function App() {
  return(
    <Router>
      <NavBar />
      <About />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/restaurants/:location/:term?" component={Results}/>
      </Switch>
    </Router>
  )
}
