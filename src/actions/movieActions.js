export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVİE = "ADD_MOVİE";

export const deleteMovie = (id) => {
  return { type: DELETE_MOVIE, payload: id };
};
export const addmovie = (movie) => {
  return { type: ADD_MOVİE, payload: movie };
};
