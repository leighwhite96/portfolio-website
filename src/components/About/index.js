import React, {Component} from 'react';
import 'react-dom'
import EasyTransition from 'react-easy-transition'
import { Container, Row, Col } from 'reactstrap'
import dragula from 'react-dragula'

import Quote from '../Quote'

import './About.css'

class About extends Component {
  componentDidMount(){
    let iconContainerb = this.refs.icon;
    dragula([iconContainerb])
  }
  render () {
    return (
      <EasyTransition
      path={"/"}
      initialStyle={{opacity: 0}}
      transition="opacity 0.3s ease-in"
      finalStyle={{opacity: 1}}
  >
      <Container className="About" >
      <Row>
      <Col className="section" id="first" xs="12" sm="12" md="12" lg="4" >
      <div id="imgcontainer">
        <img src="headshot.jpg" id="maFace"/>
      </div>
      <p>Lorem ipsum dolor amet affogato tbh brunch neutra, poutine unicorn pork belly microdosing health goth tumblr scenester palo santo coloring book taxidermy hashtag. Tacos master cleanse cardigan, YOLO asymmetrical art party ramps tbh lyft VHS keffiyeh raclette.</p>
      </Col>
          <Col className="section" xs="12" sm="12" md="12" lg="4" >
            <h1 className="display-4">About</h1>
            <p>Lorem ipsum dolor amet affogato tbh brunch neutra, poutine unicorn pork belly microdosing health goth tumblr scenester palo santo coloring book taxidermy hashtag. Tacos master cleanse cardigan, YOLO asymmetrical art party ramps tbh lyft VHS keffiyeh raclette.</p>
            <p>Lorem ipsum dolor amet affogato tbh brunch neutra, poutine unicorn pork belly microdosing health goth tumblr scenester palo santo coloring book taxidermy hashtag. Tacos master cleanse cardigan, YOLO asymmetrical art party ramps tbh lyft VHS keffiyeh raclette.</p>
          </Col>
          <Col className="section" xs="12" sm="12" md="12" lg="4">
          <h1 className="display-4">Key Skills</h1>
          <ul>
            <li>I got mad skills </li>
            <li>I got mad skills </li>
            <li>I got mad skills </li>
          </ul>
          </Col>

        </Row>
        <Row>
        <span id="logo">Don't like the order of these logos? Move them around...</span>
        <div id="logoContainer" ref="icon">
          <div><i class="devicon-html5-plain colored fa-2x"></i></div>
          <div><i class="devicon-css3-plain-wordmark colored fa-2x"></i></div>
          <div><i class="devicon-bootstrap-plain fa-2x"></i></div>
          <div><i class="devicon-nodejs-plain colored fa-2x"></i></div>
          <div><i class="devicon-atom-original colored fa-2x"></i></div>
          <div><i class="devicon-github-plain colored fa-2x"></i></div>
          <div><i class="devicon-express-original colored fa-2x"></i></div>
          <div><i class="devicon-react-original colored fa-2x"></i></div>
          <div><i class="devicon-javascript-plain colored fa-2x"></i></div>
          <div><i class="devicon-mongodb-plain colored fa-2x"></i></div>
        </div>
        </Row>
      </Container>
      </EasyTransition>
    )
  }
}

export default About;
