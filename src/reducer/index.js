import { SHOW_MODAL } from "../actions/types";

const initialState = {
  showModal: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOW_MODAL:
      return {
        showModal: payload,
      };
    default:
      return state;
  }
};

export default reducer;
