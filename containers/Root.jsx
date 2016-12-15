import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import React, { Component } from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import Immutable from "immutable";

import RootReducer from "../reducers/RootReducer";
import App from '../containers/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import configureStore from '../store/configureStore';

const logger = createLogger();
const initialState = Immutable.Map({
    environment: {isLoading : false,data:[]}
});

const store = createStore(
    RootReducer,
    initialState,
    applyMiddleware(thunk, logger)
);

console.log("Store",store);

const routes = (
    <Router history={browserHistory}>
        <Route path={"/"} component={App}>
            <Route path={"register"} component={SignUpPage} />
            <Route path={"login"} component={SignInPage} />
        </Route>
    </Router>
);



export default class Root extends React.Component {
    render() {
        return (    
            <Provider store={store} children={routes}>
            </Provider>
        )
    }
};
