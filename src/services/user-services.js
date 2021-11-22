import axios from "axios";
import URLS from "../shared/urls";

class UserServices {
  allUsers() {
    const url = `${URLS.BASE_URL}/users`;
    return axios.get(url);
  }
}

/*********Admin Serives***********/

let userService = new UserServices();

export { userService };
