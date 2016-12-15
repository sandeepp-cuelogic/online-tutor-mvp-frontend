import React, { PropTypes } from "react";
import { render } from "react-dom";
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ImageDehaze from 'material-ui/svg-icons/image/dehaze';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Link } from 'react-router';
   
        const Logged = (props) => (
        <IconMenu
            {...props}
            iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
            <MenuItem primaryText="Dashboard" value = "/" containerElement={<Link to="/" />} />
            <MenuItem primaryText="Sign out" value = "/signout" containerElement={<Link to="/signout" />}/>            
        </IconMenu>
        );

        Logged.muiName = 'IconMenu';

 
export const Navbar = (props) => { 
        return (    
                <AppBar
                    title="Online Tutor"
                    iconElementLeft={<IconButton onTouchTap={props.handleToggle}><ImageDehaze /></IconButton>}
                    iconElementRight={<Logged />}
                />  
                 
        );
}

Navbar.propTypes = {
  handleToggle : PropTypes.func
};