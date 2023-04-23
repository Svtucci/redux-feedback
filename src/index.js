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
    }
    return state;
}

const understand = (state = 0, action) => {
    if (action.type === 'SET_UNDERSTAND') {
        return action.payload
    }
    return state; 
}

const support = (state = 0, action) => {
    if (action.type === 'SET_SUPPORT') {
        return action.payload
    }
    return state; 
}

const comment = (state ='Please leave a comment here...', action) => {
    if (action.type === 'SET_COMMENT') {
        return action.payload
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
