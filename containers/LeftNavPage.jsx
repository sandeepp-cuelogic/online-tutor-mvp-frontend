import React , { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { browserHistory } from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { LeftNav } from "../components/LeftNav";
import Router, {Link} from 'react-router';


export default class LeftNavPage extends React.Component {
   
     constructor(){
        super();
        this.state = {open: false};
    }

 handleToggle = () => this.setState({open: !this.state.open});
 changeState = (obj) => this.setState(obj);

 onRegistrationClicked = () => { 
    return this.props.getRegister(this.state);
 }

    render(){   
      return (  
            <MuiThemeProvider>
                <LeftNav onRegistrationClicked = { this.onRegistrationClicked } handleToggle= {this.handleToggle} changeState = {this.changeState} open= {this.state.open} />
            </MuiThemeProvider>    
        );
    }
}
