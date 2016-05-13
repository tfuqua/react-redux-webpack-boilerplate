import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions/actions';

class TestContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="container-fluid">
        <h3>Employees</h3>
        <p>
          The data below is fetched from /api/test. This can be done client side or server side
        </p>
        <div className="employee-data">
          {this.props.employees.data.map((employee, index) => (
            <div key={index}>{employee.firstName} {employee.lastName}</div>
          ))}
        </div>
      </div>
    );
  }
}

TestContainer.need = [() => {
  return Actions.getTestData.bind(null)();
}];

TestContainer.contextTypes = {
  router: React.PropTypes.object,
};

TestContainer.propTypes = {
  employees: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    employees: (store.data),
  };
}

export default connect(mapStateToProps)(TestContainer);
