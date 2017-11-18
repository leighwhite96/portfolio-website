import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import { Jumbotron, Container } from 'reactstrap'

import Home from '../Home'
import About from '../About'
import Contact from '../Contact'
import Work from '../Work'
import Nav from '../Nav'
import RandomUser from '../RandomUser'
import ProjCardNoLink from '../CardNoLink'
import BigProjCard from '../BigProjCard'

import './Portfolio.css';

class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: [
        'randomuser',
        'equation'
      ]
    }
  }
  render() {
    let text = "Lorem ipsum dolor amet jean shorts adaptogen tumblr, ugh paleo snackwave coloring book chartreuse hashtag vegan literally raclette tilde four loko. Enamel pin leggings DIY blue bottle cloud bread bitters. Try-hard art party +1, sartorial next level locavore salvia air plant tacos trust fund ugh freegan offal kombucha. Vice stumptown tumeric, yr paleo hashtag fixie quinoa hot chicken. Unicorn listicle cred try-hard cronut air plant."

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
            <Route path={`/work/${this.state.projects[0]}`} component={RandomUser}/>
            <Route path={`/work/${this.state.projects[1]}`} render={()=><BigProjCard text={text}/>}/>
            </Switch>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Portfolio;
