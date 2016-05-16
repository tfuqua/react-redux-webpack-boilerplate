import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions/actions';

class EmployeeList extends Component {

  componentDidMount() {
    const that = this;

    if (this.props.employees === undefined) {
      setTimeout(function()
      {
        that.props.dispatch(Actions.getTestData());
      }, 2000);
    }
  }

  render() {
    return (
      this.props.employees === undefined
      ? <p>LOADING</p>
      :
        <div className="listView">
          <div className="employee-data">
            {
              this.props.employees.map((employee, index) => (
                <div key={index}>{employee.firstName} {employee.lastName}</div>
              ))
            }
          </div>
        </div>
    );
  }
}

EmployeeList.propTypes = {
  employees: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(EmployeeList);
