import { userActions } from "./actions";
import axios from "axios";
import { URLS } from "../../shared/urls/urls";

let config = {
  headers: {
    "Content-Type": "application/json",
  },
};

let authToken = "";

// ********AXIOS INTERCEPTOR********
axios.interceptors.request.use((req) => {
  if (req.method === "get" && req.url.endsWith("/users")) {
    req.headers.authorization = `Bearer ${authToken}`;
  }

  return req;
});
// //********AXIOS INTERCEPTOR********
export function Login(user) {
  let payload = {
    globalmessage: "",
    isLoggedIn: false,
    role: "",
    authToken: "",
    loggedUserInfo: {},
  };
  return (dispatch) => {
    axios.post(URLS.LOGIN, JSON.stringify(user), config).then(
      (response) => {
        payload.globalmessage = `User with email id ${user.email} loggedin successfully`;
        payload.isLoggedIn = true;
        payload.role = response.data.user.role;
        payload.authToken = response.data.accessToken;
        payload.loggedUserInfo = response.data.user;
        dispatch({ type: userActions.LOGIN, payload: payload });
      },
      (error) => {
        payload.globalmessage = `${error.response.data}`;
        payload.isLoggedIn = false;
        payload.authToken = "";
        payload.role = "";
        dispatch({ type: userActions.LOGIN, payload: payload });
      }
    );
  };
}

export function Logout() {
  let payload = {
    globalmessage: "LOGGED OUT",
    isLoggedIn: false,
    role: "",
    authToken: "",
  };
  return (dispatch) => {
    return dispatch({ type: userActions.LOGOUT, payload: payload });
  };
}
