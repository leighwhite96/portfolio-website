import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap'


import ProjCard from '../Card'

class Projects2 extends Component {
  render () {
    return(
      <Container className="Work" >
        <Row>
          <Col xs="12" sm="12" md="12" lg="4" >
            <ProjCard path="/work/phone" title="Phone" sub="subtitle" pic="phone.png"  />
          </Col>
          <Col xs="12" sm="12" md="12" lg="4" >
            <ProjCard path="/work/ron" title="Ron Swanson Quote Generator" sub="subtitle" pic="ron.png" />
          </Col>
          <Col xs="12" sm="12" md="12" lg="4" >
            <ProjCard path="/work/table" title="Table" sub="subtitle" pic="table.png"  />
          </Col>
        </Row>
        </Container>
    )
  }
}

export default Projects2;
