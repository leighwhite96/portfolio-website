import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap'


import ProjCard from '../Card'

class Projects1 extends Component {
  render () {
    return(
      <Container className="Work" >
        <Row>
          <Col xs="12" sm="12" md="12" lg="4" >
            <ProjCard path="/work/randomuser" title="Random User Generator" pic="users2.png"  />
          </Col>
          <Col xs="12" sm="12" md="12" lg="4" >
            <ProjCard path="/work/equation" title="Second order polynomial equation solver" pic="equation.png" />
          </Col>
          <Col xs="12" sm="12" md="12" lg="4" >
            <ProjCard path="/work/rps" title="Rock Paper Scissors" pic="rps.png"  />
          </Col>
        </Row>
        </Container>
    )
  }
}

export default Projects1;
