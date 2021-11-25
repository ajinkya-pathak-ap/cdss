import { createStore, combineReducers } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { LoginReducer } from "../redux/reducers/LoginReducer";

/** combine reducers*/
let rootReducer = combineReducers({
  login: LoginReducer,
});

/**create store  */
let appStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default appStore;
