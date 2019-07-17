import { GET_LIST, GET_META } from '../../actions/Reviews/types.js';

const listReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_LIST:
      return payload;
    default:
      return state;
  }
};
export default listReducer;
