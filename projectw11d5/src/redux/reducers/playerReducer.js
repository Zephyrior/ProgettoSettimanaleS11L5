import { SELECT_SONG } from "../actions";

const initialState = {
  songSelected: null,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SONG:
      return {
        ...state,
        songSelected: action.payload,
      };
    default:
      return state;
  }
};
export default playerReducer;
