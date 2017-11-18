import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap'

import ProjCard from '../Card'

class Projects3 extends Component {
  render () {
    return(
      <Container className="Work" >
        <Row>
          <Col xs="12" sm="12" md="12" lg="4" >
            <ProjCard path="/work/staticportfolio" title="Static Portfolio" sub="subtitle" pic="port.png"  />
          </Col>
          <Col xs="12" sm="12" md="12" lg="4" >
            <ProjCard path="/work/reactrouter" title="React Router and Material UI" sub="subtitle" pic="router.png" />
          </Col>
          <Col xs="12" sm="12" md="12" lg="4" >

          </Col>
        </Row>
        </Container>
    )
  }
}

export default Projects3;
