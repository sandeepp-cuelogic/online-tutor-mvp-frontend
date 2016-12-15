import React, { Component } from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from "react-router";
import Immutable from "immutable";

import RootReducer from "../reducers/RootReducer";

import App from '../containers/App';
import configureStore from '../store/configureStore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginPage from "../containers/LoginPage";
import SignUpPage from "../containers/SignUpPage";

//import Root from "../containers/Root";


//Needed for React Developer Tools
window.React = React;

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const logger = createLogger();
const initialState = Immutable.Map({
    environment: {isLoading : false,data:[]}
});

const store = createStore(
    RootReducer,
    initialState,
    applyMiddleware(thunk, logger)
);


const routes = (
    <Router history={browserHistory}>
        <Route path={"/"} component={App}>
            <Route path={"/register"} component={SignUpPage} />            
            <Route path={"/login"} component={LoginPage} />
        </Route>
    </Router>
);


ReactDOM.render(
  <Provider store={store} children={routes}>    
  </Provider>,
  document.getElementById("root")
);

console.log(store)

