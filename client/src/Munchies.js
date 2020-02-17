import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from 'react-bootstrap/Nav'
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import AboutUs from './components/AboutUs';
import Search from './components/Search';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Munchies() {
  return (
    <Router>
      <div>
        <Nav style={{ backgroundColor: '#6495ed' }} defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link style={{ color: '#fff' }} href="/home">Team Munchies!</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link style={{ color: '#fff' }} href="/about" eventKey="link-1">About Us</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link style={{ color: '#fff' }} href="/recipe/random" eventKey="link-2">Restaurant of the Month </Nav.Link>
          </Nav.Item>
        </Nav>
        <Switch>
          <Route path="/:id">
            <Recipe />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>      
    </Router>
  );
}

export default Munchies;