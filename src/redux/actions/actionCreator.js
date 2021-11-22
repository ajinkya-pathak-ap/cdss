import * as actions from "./userActions";
import axios from "axios";
import URLS from "../../shared/urls";

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
