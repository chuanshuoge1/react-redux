import React, { Component } from 'react';
import './App.css';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk  from 'redux-thunk';
import axios from 'axios';
import promiseMiddleware from 'redux-promise-middleware';

const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "fetch_user_PENDING": {
            return {...state, fetching:true}
            break;
        }
        case "fetch_user_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                users: action.payload,
            }
            break;
        }
        case "fetch_user_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload,
            }
            break;
        }
    }
    return state;
}

const middleware = applyMiddleware(promiseMiddleware(), thunk, logger);
const store = createStore(reducer, middleware)

store.dispatch(
    {
        type: "fetch_user",
        payload: axios.get("http://rest.learncode.academy/api/wstern/users"),
    }
);

class App extends Component {
    
  render() {
    return (
        <div>
            redux
            </div>
    );
  }
}

export default App;
