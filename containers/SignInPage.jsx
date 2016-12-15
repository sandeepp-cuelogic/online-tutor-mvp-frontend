import React , { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { browserHistory } from "react-router";
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { SignInForm } from "../components/user/SignInForm";

import { loginClicked } from "../actions/UserAction.js";

export class SignInPage extends React.Component {
    constructor(){
        super();
        this.state = {
            email : "",
            password : ""
        }
    }

    onLoginClicked = () => {
        if (this.state.email && this.state.password) {
            this.props.userLogin(this.state);
        }
    }
    
    onChangeHandle = (event) => {
        const obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);
    }
    
    render(){
        return (    
            
            <MuiThemeProvider>
                <SignInForm changeHandler={this.onChangeHandle} clickedLogin = {this.onLoginClicked} />
            </MuiThemeProvider>    
        );
    }
}


const mapStateToProps = (state) => {
    return {
        user : state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin : (email) => {
            dispatch(loginClicked(email));
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SignInPage)