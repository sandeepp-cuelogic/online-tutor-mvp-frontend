import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Navbar } from "../components/NavBar";
import { LeftNav } from "../components/LeftNav";
import { Link } from 'react-router';
import { onRegistrationClicked } from "../actions/UserAction.js";
import { onLoginClicked } from "../actions/UserAction.js";

const paperStyle = {
    height: "80%",
    width: "80%",
    margin: 20,
    float: "right",
    textAlign: 'center',
    display: 'inline-block'
};


export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    // Functions uses in navigation bar and left naviagation bar:
    handleToggle = () => this.setState({ open: !this.state.open });
    handleClose = () => this.setState({ open: false });
    changeState = (obj) => this.setState(obj);

    onEnvironmentClicked = () => {
        return this.props.getEnvironment(this.state);
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Navbar handleToggle={this.handleToggle} />
                    <LeftNav onRegistrationClicked={this.onRegistrationClicked} changeState={this.changeState} handleClose={this.handleClose} open={this.state.open} />
                    <Paper style={paperStyle}>
                        {this.props.children}
                    </Paper>
                </div>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        environment: state.environment
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEnvironment: () => { 
            dispatch(environmentClicked());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)