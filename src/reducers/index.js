import { combineReducers } from "redux";
import favouritereducer from "./favoriReducer";
import movieReducer from "./movieReducer";
const routeReducer = combineReducers({
  movie: movieReducer,
  favourite: favouritereducer,
});
export default routeReducer;
