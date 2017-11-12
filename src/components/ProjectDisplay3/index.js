import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap'

import ProjCardNoLink from '../CardNoLink'

class Projects3 extends Component {
  render () {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
    return(
      <Container className="Work" >
        <Row>
          <Col xs="12" sm="12" md="12" lg="4" >
            <ProjCardNoLink title="Static Portfolio" sub="subtitle" pic="port.png" text={text} />
          </Col>
          <Col xs="12" sm="12" md="12" lg="4" >
            <ProjCardNoLink title="React Router and Material UI" sub="subtitle" pic="router.png" text={text}/>
          </Col>
          <Col xs="12" sm="12" md="12" lg="4" >
            
          </Col>
        </Row>
        </Container>
    )
  }
}

export default Projects3;
