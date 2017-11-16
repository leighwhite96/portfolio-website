import React, {Component} from 'react';
import EasyTransition from 'react-easy-transition'
import Paper from 'material-ui/Paper'
import { Container, Row, Col, Button } from 'reactstrap'

import ProjCard from '../Card'
import ProjCardNoLink from '../CardNoLink'
import Proj1 from '../ProjectDisplay1'
import Proj2 from '../ProjectDisplay2'
import Proj3 from '../ProjectDisplay3'

import './Work.css'

class Work extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: 0,
      all: false
    }
  }

  nextClick = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1
  }))}

  backClick = () => {
    this.setState((prevState) => ({
      page: prevState.page - 1
    }))
  }

  backToTopClick = () => {
    this.setState((prevState) => ({
      all: true
    }))
  }

  render () {
    if(this.state.page === 0) {

      return (
        <EasyTransition
        path={"/"}
        initialStyle={{opacity: 0}}
        transition="opacity 0.3s ease-in"
        finalStyle={{opacity: 1}}
    >     <div className="Work">
          <h1 className="display-4">Examples of my work</h1>
          <Proj1 />
          <div id="btnContainer1">
          <Button id="btn" outline color="secondary" onClick={this.nextClick}>See more</Button>
          </div>
          </div>
        </EasyTransition>
      )
    } else if (this.state.page === 1) {
      return (
        <EasyTransition
        path={"/"}
        initialStyle={{opacity: 0}}
        transition="opacity 0.3s ease-in"
        finalStyle={{opacity: 1}}
    >
          <div className="Work">
          <h1 className="display-4">Examples of my work</h1>
          <Proj1 />
          <div id="btnContainer1">
          <Button id="btn" outline color="secondary" onClick={this.nextClick}>See more</Button>
          </div>
          <Proj2 />
          <div id="btnContainer">
          <Button id="btn" outline color="secondary" onClick={this.nextClick}>See more</Button>
          </div>
          </div>
        </EasyTransition>
      )
    } else if (this.state.page === 2 || this.state.all) {
      return (
        <EasyTransition
        path={"/"}
        initialStyle={{opacity: 0}}
        transition="opacity 0.3s ease-in"
        finalStyle={{opacity: 1}}
    >
          <div className="Work">
          <h1 className="display-4">Examples of my work</h1>
          <Proj1 />
          <div id="btnContainer1">
            <Button id="btn" outline color="secondary" onClick={this.nextClick}>See more</Button>
          </div>
          <Proj2 />
          <div id="btnContainer">
            <Button id="btn" outline color="secondary" onClick={this.nextClick}>See more</Button>
          </div>
            <Proj3 />
          <div id="btnContainer">
            <Button id="btn" outline color="secondary" onClick={this.backToTopClick}><a href="#top">Back to Top</a></Button>
          </div>
          </div>
        </EasyTransition>
      )
    }

    }

  }


export default Work;
