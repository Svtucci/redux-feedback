import React from 'react';
import axios from 'axios';
import './App.css';

import {HashRouter as Router, Route, Link } from 'react-router-dom';

import CommentsFour from '../Steps/CommentsFour.jsx';
import FeelingOne from '../Steps/FeelingOne.jsx';
import SupportThree from '../Steps/SupportThree.jsx';
import UnderStandTwo from '../Steps/UnderStandTwo.jsx';

function App() {

  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

        <Route exact path="/">
          <FeelingOne />
        </Route>

        <Route exact path="/step-2">
          <UnderStandTwo />
        </Route>

        <Route exact path="/step-3">
          <SupportThree />
        </Route>

        <Route exact path="/step-4">
          <CommentsFour />
        </Route>
      </Router>
    </div>
  );
}

export default App;
