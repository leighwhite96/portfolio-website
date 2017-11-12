import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap'


import ProjCard from '../Card'
import ProjCardNoLink from '../CardNoLink'

class Projects2 extends Component {
  render () {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
    return(
      <Container className="Work" >
        <Row>
          <Col xs="12" sm="12" md="12" lg="4" >
            <ProjCardNoLink title="Phone" sub="subtitle" pic="phone.png" text={text} />
          </Col>
          <Col xs="12" sm="12" md="12" lg="4" >
            <ProjCardNoLink title="Ron Swanson Quote Generator" sub="subtitle" pic="ron.png" text={text}/>
          </Col>
          <Col xs="12" sm="12" md="12" lg="4" >
            <ProjCardNoLink title="Table" sub="subtitle" pic="table.png" text={text} />
          </Col>
        </Row>
        </Container>
    )
  }
}

export default Projects2;
