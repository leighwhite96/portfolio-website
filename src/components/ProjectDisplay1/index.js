import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap'


import ProjCard from '../Card'
import ProjCardNoLink from '../CardNoLink'

class Projects1 extends Component {
  render () {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
    return(
      <Container className="Work" >
        <Row>
          <Col xs="12" sm="12" md="12" lg="4" >
            <ProjCard path="/work/randomuser" title="Random User Generator" pic="users2.png"  />
          </Col>
          <Col xs="12" sm="12" md="12" lg="4" >
            <ProjCardNoLink title="Second order polynomial equation solver" pic="equation.png" />
          </Col>
          <Col xs="12" sm="12" md="12" lg="4" >
            <ProjCardNoLink title="Rock Paper Scissors" pic="rps.png"  titleStyle={{paddingTop:'75px'}}/>
          </Col>
        </Row>
        </Container>
    )
  }
}

export default Projects1;
