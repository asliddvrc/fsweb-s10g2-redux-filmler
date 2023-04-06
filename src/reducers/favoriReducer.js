import {
  TOGGLE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "../actions/favoritesActions";

const initialState = { initialFavouriteFilms: [], display: false };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return { ...state, display: !state.display };
    case ADD_FAVORITE:
      console.log("burdayım");
      return {
        ...state,
        initialFavouriteFilms: [...state.initialFavouriteFilms, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        initialFavouriteFilms: state.initialFavouriteFilms.filter((item) => {
          return item.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};
export default reducer;
