import {
  GET_DATA,
  GET_DATA_FAILURE,
  GET_DATA_SUCCESSFUL,
  LOGGED_IN,
  LOGGED_OUT,
} from "../utils";

const default_state = {
  data: {},
  is_logged_in: false,
  is_loading: false,
  error: false,
};

export const UserReducer = (state = default_state, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return { ...state, is_logged_in: true };

    case LOGGED_OUT:
      return { ...state, is_logged_in: false };

    case GET_DATA:
      return { ...state, is_loading: true };

    case GET_DATA_SUCCESSFUL:
      return { ...state, is_loading: false, data: action.payload };

    case GET_DATA_FAILURE:
      return { ...state, is_loading: false, error: action.payload };

    default:
      return state;
  }
};
