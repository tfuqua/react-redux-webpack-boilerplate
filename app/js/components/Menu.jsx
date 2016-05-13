import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import * as Actions from '../redux/actions/actions';

class Menu extends Component {
  constructor(props, context) {
    super(props, context);
    this.loadEmployeeData = this.loadEmployeeData.bind(this);
  }

  loadEmployeeData() {
    this.props.dispatch(Actions.getTestData());
  }

  render() {
    return (
      <nav className="navbar">
        <div className="container-fluid">
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/test" onClick={this.loadEmployeeData}>
              Employees
            </Link>
          </li>
        </div>
      </nav>
    );
  }
}

Menu.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


export default Menu;
