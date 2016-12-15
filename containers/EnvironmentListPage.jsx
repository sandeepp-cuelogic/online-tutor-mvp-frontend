import React , { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { browserHistory } from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import EnvironmentList from "../components/user/EnvironmentList";
import { environmentClicked } from "../actions/EnvironmentAction.js";

export class EnvironmentListPage extends React.Component {  
    constructor(props){
        //debugger;
        super(props);
        this.state = {
          open: false,
        }
    }

handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  mySubmit = (obj)=> {
    console.log("Form Submit",obj);  
  }

//   onEnvironmentClicked = () => { 
//     return this.props.getEnvironment(this.state);
//  }

   render(){   
      return (  
            <MuiThemeProvider>
                <EnvironmentList handleSubmit={this.mySubmit} environment={this.props.environment} handleOpen= {this.handleOpen}  handleClose = {this.handleClose} open= {this.state.open} />
            </MuiThemeProvider>    
        );
    }
}

const mapStateToProps = (state) => {
    return {    
        // Immutable state manage here:
        environment : state.get("environment")
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EnvironmentListPage)