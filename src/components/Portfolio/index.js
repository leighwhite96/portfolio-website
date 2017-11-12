import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import { Jumbotron, Container } from 'reactstrap'

import Home from '../Home'
import About from '../About'
import Contact from '../Contact'
import Work from '../Work'
import Nav from '../Nav'
import RandomUser from '../RandomUser'

import './Portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
      <Nav />
        <Jumbotron id="header" fluid>
          <Container fluid>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route exact path="/work" component={Work}/>
            <Route path="/work/randomuser" component={RandomUser}/>
            </Switch>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Portfolio;
