import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Portfolio from './components/Portfolio';
import 'bootstrap/dist/css/bootstrap.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import {
  BrowserRouter as Router
} from 'react-router-dom'

const Page = () => {
  return (
    <MuiThemeProvider>
      <Portfolio />
    </MuiThemeProvider>
  )
}

ReactDOM.render(<Router><Page /></Router>, document.getElementById('root'));
