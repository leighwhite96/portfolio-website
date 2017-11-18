import React, {Component} from 'react';
import {Card, CardTitle, CardMedia, CardText} from 'material-ui';
import EasyTransition from 'react-easy-transition'

import './Card.css'

const BigProjCard = (props) => {

    return (
      <div className="project">
      <h1 className="display-4">Equation</h1>
      <EasyTransition
      path={"/"}
      initialStyle={{opacity: 0}}
      transition="opacity 0.3s ease-in"
      finalStyle={{opacity: 1}}
      >
      <div id="bigproj" >
      <Card>
      <CardText>{props.text}</CardText>

      </Card>
      </div>
      </EasyTransition>
      </div>
    )

}

export default BigProjCard;
