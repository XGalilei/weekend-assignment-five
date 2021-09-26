import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

const feelingState = (state, action) => {
    if(action.type === 'SET_FEELING') {
        return action.payload;
    }
    return state;
}

const understandingState = (state, action) => {
    if(action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    }
    return state;
}

const supportState = (state, action) => {
    if(action.type === 'SET_SUPPORT') {
        return action.payload;
    }
    return state;
}

const commentState = (state, action) => {
    if(action.type === 'SET_COMMMENTS') {
        return action.payload;
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        feelingState,
        understandingState,
        supportState,
        commentState
    }),applyMiddleware(logger)
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
