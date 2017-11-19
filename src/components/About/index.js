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
      <p>Welcome to my website! Here's a bit of background about me. After graduating in Maths in early 2017 I found myself a bit lost and unenthused by the idea of applying for countless grad schemes. In the summer I stumbled across the School of Code and I haven't looked back since. </p>

      </Col>
          <Col className="section" xs="12" sm="12" md="12" lg="4" >
            <h1 className="display-4">About</h1>
            <p>During my time at the School of Code I have found that I enjoy both front and back-end development and going forward want to work in a full-stack role. </p>
            <p>In particular I have really enjoyed working with React (I like it so much I decided to build my wesbite uisng it!) and working with MongoDB on the server-side.</p>
            <p>I am interested in working collaboratively in an Agile team and in a position where I have the opportunity to develop new skills and learn new technologies. </p>
          </Col>
          <Col className="section" xs="12" sm="12" md="12" lg="4">
          <h1 className="display-4">Key Skills</h1>
          <ul>
            <li>A skillHi. stuff about me. I am so interesting. Text text text text </li>
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
