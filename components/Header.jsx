import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';
import DatePickerExampleSimple from './DatePicker';
import AppBarExampleComposition from './NavBar';

import AppBar from 'material-ui/AppBar';

const defaultStyle = {
  marginLeft: 20
};

class Header extends Component {
  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className="header">
          <AppBarExampleComposition />
          <h1 style={defaultStyle} >Online Tutor</h1>                                        
      </header>
    );
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Header;
