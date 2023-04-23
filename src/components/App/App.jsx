import React from 'react';
import axios from 'axios';
import './App.css';

import {HashRouter as Router, Route, Link } from 'react-router-dom';

import CommentsFour from '../Steps/CommentsFour.jsx';
import FeelingOne from '../Steps/FeelingOne.jsx';
import SupportThree from '../Steps/SupportThree.jsx';
import UnderStandTwo from '../Steps/UnderStandTwo.jsx';
import Review from '../Steps/Review.jsx';
import FeedbackList from './FeedbackList/FeedbackList';
import SuccessPage from '../Steps/SuccessPage';

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

        <Route exact path="/review">
          <Review />
        </Route>

        <Route exact path="/feedback-list">
          <FeedbackList />
        </Route>

        <Route exact path="/success">
          <SuccessPage />
        </Route>

      </Router>
    </div>
  );
}

export default App;
