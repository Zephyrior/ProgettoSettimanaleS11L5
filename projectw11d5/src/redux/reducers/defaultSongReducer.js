import { SET_BINI, SET_CUPOFJOE, SET_DIONELA } from "../actions";

const initialState = {
  cupofjoe: [],
  bini: [],
  dionela: [],
};

const defaultSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CUPOFJOE:
      return {
        ...state,
        cupofjoe: action.payload,
      };
    case SET_BINI:
      return {
        ...state,
        bini: action.payload,
      };
    case SET_DIONELA:
      return {
        ...state,
        dionela: action.payload,
      };
    default:
      return state;
  }
};
export default defaultSongReducer;
