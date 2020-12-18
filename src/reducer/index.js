import {
  SHOW_MODAL,
  SET_ALERT,
  REMOVE_ALERT,
  CLEAR_ALERT,
} from "../actions/types";

const initialState = {
  showModal: false,
  alert: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOW_MODAL:
      return {
        showModal: payload,
      };
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    case CLEAR_ALERT:
      return (state = []);
    default:
      return state;
  }
};

export default reducer;
