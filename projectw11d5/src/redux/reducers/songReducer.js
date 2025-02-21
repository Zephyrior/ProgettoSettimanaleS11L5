import { SEARCH_SONGS } from "../actions";

const initialState = {
  searchedSongs: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SONGS:
      return {
        ...state,
        searchedSongs: [...state.searchedSongs, action.payload],
      };
    default:
      return state;
  }
};
export default searchReducer;
