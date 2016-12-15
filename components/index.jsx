import React, { Component } from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from "react-router";
import Immutable from "immutable";

import RootReducer from "../reducers/RootReducer";
import App from '../containers/App';
import configureStore from '../store/configureStore';
import SignUpPage from "./SignUpPage";
import SignInPage from "./SignInPage";


//Needed for React Developer Tools
window.React = React;

injectTapEventPlugin();

const logger = createLogger();
const initialState = Immutable.Map({
    isLoggedIn: false,
    fetchingUserDetails: false,
    userObject: null,
    error: null,
});

const store = configureStore(
    RootReducer,
    window.initialState,
    applyMiddleware(thunk, logger)
);

var routes = (
    <Router history={browserHistory}>
        <Route path={"/"} component={App}>            
            <Route path={"register"} component={SignUpPage} />
            <Route path={"login"} component={SignInPage} />        
        </Route>
    </Router>
);



ReactDOM.render(
  <Provider store={store} children={routes}>
    <App />
  </Provider>,
  document.getElementById("root")
);
