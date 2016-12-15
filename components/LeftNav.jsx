//import React, { PropTypes } from "react";
import React, { PropTypes, Component } from 'react';
import { render } from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import Router, {Link} from 'react-router';

export const LeftNav = (props) => {
        return (  
            <div>
              <Drawer 
                docked={false}
                width={200} 
                openSecondary={false} 
                open={ props.open } //this.state.open  
                icon={<FontIcon className="muidocs-icon-custom-github" />}
                onRequestChange={(open) => props.changeState({open})}
                >
                <AppBar title="Online Tutor" />                                          
                <MenuItem onTouchTap={props.handleClose} value = "/register" containerElement={<Link to="/register" />} >Registration</MenuItem>
                <MenuItem onTouchTap={props.handleClose} value = "/login" containerElement={<Link to="/login" />} >Login</MenuItem>
                <MenuItem onTouchTap={props.handleClose} value = "/" containerElement={<Link to="/" />} >Student Dashboard</MenuItem>
                <MenuItem onTouchTap={props.handleClose} value = "/" containerElement={<Link to="/" />} >Teacher Dashboard</MenuItem>
                <MenuItem onTouchTap={props.handleClose} value = "/" containerElement={<Link to="/" />} >Schedule Session</MenuItem>
                <MenuItem onTouchTap={props.handleClose} value = "/" containerElement={<Link to="/" />} >Session Details</MenuItem>
                <MenuItem onTouchTap={props.handleClose} value = "/" containerElement={<Link to="/" />} >Session Invitation</MenuItem>
                <MenuItem onTouchTap={props.handleClose} value = "/" containerElement={<Link to="/" />} >Live Session</MenuItem>          
                <MenuItem>Settings</MenuItem>                
              </Drawer>
            </div> 
        );
}

LeftNav.propTypes = {
  changeState : PropTypes.func,
  handleToggle : PropTypes.func,
  handleClose : PropTypes.func,
  onRegistrationClicked : PropTypes.func,
  onLoginClicked : PropTypes.func
};