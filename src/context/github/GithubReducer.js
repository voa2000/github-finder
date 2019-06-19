import {
  SEARCH_USERS,
  SET_LOADING,
  GET_USERS,
  CLEAR_USERS,
  GET_REPOS
} from "../Types";

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};
