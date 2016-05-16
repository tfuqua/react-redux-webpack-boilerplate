import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import EmployeeList from '../components/EmployeeList.jsx';
import * as Actions from '../redux/actions/actions';

class TestContainer extends Component {

  render() {
    return (
      <div className="container-fluid">
        <h3>Employees</h3>
        <p>
          The data below is fetched from /api/test. This can be done client side or server side
        </p>
        <EmployeeList employees={this.props.employees} />
      </div>
    );
  }
}

TestContainer.need = [() => {
  return Actions.getTestData.bind(null)();
}];

TestContainer.propTypes = {
  employees: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    employees: (store.employees.employees),
  };
}

export default connect(mapStateToProps)(TestContainer);
