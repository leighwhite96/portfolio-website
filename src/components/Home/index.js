import React from 'react';
import EasyTransition from 'react-easy-transition'

import OutlineButton from '../OutlineButton'

import './Home.css'

const Home = (props) => {
  return (
    <EasyTransition
    path={"/"}
    initialStyle={{opacity: 0}}
    transition="opacity 0.3s ease-in"
    finalStyle={{opacity: 1}}
>
    <div className="Home">
      <h1 className="display-3">Leigh White</h1>
      <p className="lead">Junior Full-Stack Developer</p>
      <div id="btncontainer">
        <OutlineButton path="/about" colour="secondary" btntext="about me" />
        <OutlineButton path="/work" colour="secondary" btntext="my work" />
        <OutlineButton path="/contact" colour="secondary" btntext="contact" />
      </div>
    </div>
    </EasyTransition>
  );
};

export default Home
