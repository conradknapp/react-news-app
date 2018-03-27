import * as actionTypes from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_INITIAL_ARTICLES:
    case actionTypes.SEARCH_BY_KEYWORD:
    case actionTypes.SEARCH_BY_CATEGORY:
      return action.payload.data;
    default:
      return state;
  }
};
