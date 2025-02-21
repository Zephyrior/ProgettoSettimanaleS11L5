import { SEARCH_ARTIST } from "../actions";

const initialState = {
  searchItem: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ARTIST:
      return {
        ...state,
        searchItem: action.payload,
      };
    default:
      return state;
  }
};
export default searchReducer;
