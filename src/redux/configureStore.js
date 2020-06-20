import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import mainReducer from "./reducers";

export default function configureStore(preloadedState) {
  return createStore(
    mainReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware)
  );
}
