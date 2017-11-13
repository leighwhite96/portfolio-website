import React, {Component} from 'react';
import EasyTransition from 'react-easy-transition'
import { Container, Row, Col } from 'reactstrap'

import Quote from '../Quote'

import './About.css'

class About extends Component {
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
          <Col xs="12" sm="12" md="4" lg="4" >
            <h1 className="display-4">About</h1>
            Hi. stuff about me. I am so interesting. Text text text text
            Hi. stuff about me. I am so interesting. Text text text text
            Hi. stuff about me. I am so interesting. Text text text text
            Hi. stuff about me. I am so interesting. Text text text text
            Hi. stuff about me. I am so interesting. Text text text text
            Hi. stuff about me. I am so interesting. Text text text text
            Hi. stuff about me. I am so interesting. Text text text text
            Hi. stuff about me. I am so interesting. Text text text text
            Hi. stuff about me. I am so interesting. Text text text text
            Hi. stuff about me. I am so interesting. Text text text text
          </Col>
          <Col xs="12" sm="12" md="4" lg="4">
          <h1 className="display-4">Key Skills</h1>
          <ul>
            <li>A skillHi. stuff about me. I am so interesting. Text text text text </li>
            <li>A skillHi. stuff about me. I am so interesting. Text text text text </li>
            <li>A skillHi. stuff about me. I am so interesting. Text text text text </li>
            <li>A skillHi. stuff about me. I am so interesting. Text text text text </li>
            <li>A skillHi. stuff about me. I am so interesting. Text text text text </li>
            <li>A skillHi. stuff about me. I am so interesting. Text text text text </li>
          </ul>
          </Col>
          <Col xs="12" sm="12" md="4" lg="4" >
          <div id="quoteContainer">
            <Quote />
          </div>
          </Col>
        </Row>
        <Row>
        <div id="logoContainer">
          <i class="devicon-html5-plain colored fa-2x"></i>
          <i class="devicon-css3-plain-wordmark colored fa-2x"></i>
          <i class="devicon-bootstrap-plain fa-2x"></i>
          <i class="devicon-nodejs-plain colored fa-2x"></i>
          <i class="devicon-atom-original colored fa-2x"></i>
          <i class="devicon-github-plain colored fa-2x"></i>
          <i class="devicon-express-original colored fa-2x"></i>
          <i class="devicon-mongodb-plain colored fa-2x"></i>
          <i class="devicon-javascript-plain colored fa-2x"></i>
          <i class="devicon-react-original colored fa-2x"></i>
        </div>
        </Row>
      </Container>
      </EasyTransition>
    )
  }
}

export default About;
