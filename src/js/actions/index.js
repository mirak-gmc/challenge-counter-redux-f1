import { INCREMENT, DECREMENT } from "../const/actionTypes";

export const inc = (number = 1) => {
  return {
    type: INCREMENT,
    payload: number,
  };
};

export const dec = (payload = 1) => ({ type: DECREMENT, payload });
