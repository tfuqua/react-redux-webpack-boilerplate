import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions/actions';

class EmployeeList extends Component {

  componentDidMount() {
    if (this.props.employees === undefined) {
      this.props.dispatch(Actions.getTestData());
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
