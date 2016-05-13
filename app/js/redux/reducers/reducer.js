import * as ActionTypes from '../constants/constants';

const initialState = { data: {} };
const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypes.GET_TEST_DATA :
      return {
        data: action,
      };

    default:
      return state;
  }
};

export default rootReducer;
