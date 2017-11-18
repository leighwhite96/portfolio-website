import React, {Component} from 'react';
import {Card, CardTitle, CardMedia, CardText} from 'material-ui';
import EasyTransition from 'react-easy-transition'
import {Button} from 'reactstrap'
import { LinkContainer } from 'react-router-bootstrap'

import './Card.css'

const BigProjCard = (props) => {

    return (
      <div className="project">
      <h1 className="display-4">{props.title}</h1>
      <EasyTransition
      path={"/"}
      initialStyle={{opacity: 0}}
      transition="opacity 0.3s ease-in"
      finalStyle={{opacity: 1}}
      >
      <div id="bigproj" >
      <Card style={{opacity: "0.9"}}>
      <CardText >{props.text}</CardText>

      </Card>
      <LinkContainer to="/work">
        <Button outline color="secondary" id="back">Back</Button>
      </LinkContainer>
      </div>
      </EasyTransition>
      </div>
    )

}

export default BigProjCard;
