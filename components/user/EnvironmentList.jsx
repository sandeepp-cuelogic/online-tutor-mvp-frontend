import React, { PropTypes } from "react";
import { render } from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import { Field, reduxForm } from 'redux-form'
import validate from "../../assets/js/validation"
import asyncValidate from "../../assets/js/asyncValidate"
import RefreshIndicator from 'material-ui/RefreshIndicator';

import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import Immutable from "immutable";


const paper1 = {
  width: '150px',
  height: '125px',
  zoom: '1',
  border: '2px solid #00BCD4',
  marginTop: '50px',
}

const textAlign = {
  float: 'left',
  fontWeight: 'bold',
}


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    position: "relative",
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    justifyContent: 'space-around',
  },

  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  large: {
    width: 120,
    height: 120,
  },
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

const buttonStyle = {
  float: 'left',
  bottom: '15px',
}


const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>

    <TextField 
    hintText={label}
    floatingLabelText={label}
    type={type}
    onChange={props.changeHandler} 
    errorText={touched && error && <span>{error}</span>}
    />
    </div>
</div>
)


const EnvironmentList = (props) => {

  const environmentData = props.environment.data;
  const isLoadingProperty = props.environment.isLoading;
  //const { handleSubmit, pristine, reset, submitting } = props
  const { error, handleSubmit, pristine, reset, submitting } = props

   // Form Input Field:
//   const renderTextField = props => (
//   <TextField 
//     hintText={props.label}
//     floatingLabelText={props.label}
//     name= {props.name}
//     errorText={props.touched && props.error}
//     {...props}
//   />
// );


  const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={props.handleClose}
      />,
    <FlatButton
      label="Submit"
      primary={true}
      //disabled={true}
      keyboardFocused={true}
     //onTouchTap={props.handleClose}
      onClick={props.clickedSubmit}
      type="submit"
      //disabled= {submitting}
      />,

  ];

return (
    <div style={styles.root}>

    { isLoadingProperty == true ?

    <RefreshIndicator
      size={50}
      left={70}
      top={0}
      loadingColor="#FF9800"
      status="loading"
      style={styles.refresh}
    />
    : false
    }

  <GridList style={styles.gridList} cellHeight={'auto'}>

        <GridTile>
          <Card style={paper1}>
            <CardActions>
              <IconButton
                iconStyle={styles.largeIcon}
                style={styles.large}
                onTouchTap={props.handleOpen}
                >
                <AddCircleOutline />
              </IconButton>
              <Dialog
                title="Add New Environment"
                actions={actions}
                modal={true}
                open={props.open}
                >
               <form>
               <TextField 
                hintText="Enter Environment Title"
                floatingLabelText="Enter Environment Title"
                type="text"
                onChange={props.changeHandler} 
                errorText={error}
                />
                
               </form>
               </Dialog>
               
            </CardActions>
          </Card>
        </GridTile>


        {environmentData.map((tile, index) => (
          <GridTile
            key={index}
            >
            <Card style={paper1}>
              <CardHeader
                style={textAlign}
                title={tile.name}
                //subtitle= {tile.subtitle}
                />
            </Card>
          </GridTile>
        ))}



      </GridList>
    </div>
  );
}

EnvironmentList.propTypes = {
  handleOpen: PropTypes.func,
  handleClose: PropTypes.func,
  //handleSubmit: PropTypes.func,
  clickedSubmit: PropTypes.func,
};

// export default reduxForm({
//   form: "EnvironmentList", // a unique identifier for this form
//   validate,
// })(EnvironmentList)
