import { INCREMENT, DECREMENT } from "../const/actionTypes";

const initState = {
  count: 99,
};

function countReducer(state = initState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };
    case DECREMENT:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
}

export default countReducer;
