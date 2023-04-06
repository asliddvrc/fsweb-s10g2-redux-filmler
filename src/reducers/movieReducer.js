import { ADD_MOVİE, DELETE_MOVIE } from "../actions/movieActions.js";
import movies from "../data.js";

const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((item) => action.payload !== item.id),
      };
    case ADD_MOVİE:
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            ...action.payload,
            id: state.movies[state.movies.length - 1]["id"] + 1,
          },
        ],
      };
    default:
      return state;
  }
};

export default reducer;
