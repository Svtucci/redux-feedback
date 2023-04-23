import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux'; 


const feeling = (state = 0, action) => {
    if (action.type === 'SET_FEELING') {
        return action.payload
    } else if (action.type === 'CLEAR_FORM') {
        return 0;
    }
    return state;
}

const understand = (state = 0, action) => {
    if (action.type === 'SET_UNDERSTAND') {
        return action.payload
    } else if (action.type === 'CLEAR_FORM') {
        return 0;
    }
    return state; 
}

const support = (state = 0, action) => {
    if (action.type === 'SET_SUPPORT') {
        return action.payload
    } else if (action.type === 'CLEAR_FORM') {
        return 0; 
    }
    return state; 
}

const comment = (state ='Please leave a comment here...', action) => {
    if (action.type === 'SET_COMMENT') {
        return action.payload
    } else if (action.type === 'CLEAR_FORM') {
        return ''; 
    }
    return state; 
}

const feedback = (state = [], action) => {
    if(action.type === 'SET_FEEDBACK_LIST') {
        return action.payload; 
    }
    return state; 
}

const storeInstance = createStore (
    combineReducers(
        {
            feeling,
            understand,
            support, 
            comment, 
            feedback, 
            // Add other reducers 
        }
    ), 
    applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);
