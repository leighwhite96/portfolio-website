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
      page: 0
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

  render () {
    if(this.state.page === 0) {

      return (
        <EasyTransition
        path={"/"}
        initialStyle={{opacity: 0}}
        transition="opacity 0.3s ease-in"
        finalStyle={{opacity: 1}}
    >
          <Proj1 />
          <div id="btnContainer">
          <Button outline color="secondary" onClick={this.nextClick}>See more</Button>
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
          <Proj2 />
          <div id="btnContainer">
          <Button outline color="secondary" onClick={this.nextClick}>See more</Button>
          <Button outline color="secondary" onClick={this.backClick}>Back</Button>
          </div>
        </EasyTransition>
      )
    } else {
      return (
        <EasyTransition
        path={"/"}
        initialStyle={{opacity: 0}}
        transition="opacity 0.3s ease-in"
        finalStyle={{opacity: 1}}
    >
          <Proj3 />
          <div id="btnContainer">
          <Button outline color="secondary" onClick={this.backClick}>Back</Button>
          </div>
        </EasyTransition>
      )
    }
  }
}

export default Work;
