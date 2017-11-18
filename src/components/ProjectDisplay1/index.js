import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap'


import ProjCard from '../Card'
import ProjCardNoLink from '../CardNoLink'

class Projects1 extends Component {
  render () {
    return(
      <Container className="Work" >
        <Row>
          <Col xs="12" sm="12" md="12" lg="4" >
            <ProjCard path="/work/randomuser" title="Random User Generator" pic="users2.png"  />
          </Col>
          <Col xs="12" sm="12" md="12" lg="4" >
            <ProjCard path="/work/equation" onClick={this.props.onClick} bigCard={true} title="Second order polynomial equation solver" pic="equation.png" />
          </Col>
          <Col xs="12" sm="12" md="12" lg="4" >
            <ProjCardNoLink onClick={this.props.onClick} bigCard={this.props.bigCard} title="Rock Paper Scissors" pic="rps.png"  titleStyle={{paddingTop:'75px'}}/>
          </Col>
        </Row>
        </Container>
    )
  }
}

export default Projects1;
