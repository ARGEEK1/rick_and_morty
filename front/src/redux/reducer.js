import { ADD_CHARACTER, DELETE_CHARACTER } from "./types";

const initialState = {
  myFavorites: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CHARACTER:
      return {
        ...state,
        myFavorites : [...state.myFavorites, payload],
      };
    case DELETE_CHARACTER:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((char)=>char.id!==payload),
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
