import { SEARCH_SONGS } from "../actions";

const initialState = {
  searchedSongs: [],
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SONGS:
      return {
        ...state,
        searchedSongs: [action.payload],
      };
    default:
      return state;
  }
};
export default songReducer;
