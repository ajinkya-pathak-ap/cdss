import appState from "../appState";
import { userActions } from "../actions/actions";

function LoginReducer(state = appState, action) {
  if (action.type === userActions.LOGIN || action.type === userActions.LOGOUT) {
    return {
      globalmessage: action.payload.globalmessage,
      isLoggedIn: action.payload.isLoggedIn,
      role: action.payload.role,
      authToken: action.payload.authToken,
      loggedUserInfo: action.payload.loggedUserInfo,
    };
  }

  return state;
}
export { LoginReducer };
