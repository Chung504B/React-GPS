import axios from "axios";
const API_URL = "http://localhost:8080";

class AuthService {
  overspeed() {
    return axios.get(API_URL + "/overspeed", {});
  }
  logout() {
    // remove localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.removeItem("user");
  }
  register(username, email, password, role) {
    return axios.post(API_URL + "/register", {
      username,
      email,
      password,
      role,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
    console.log(localStorage.getItem("user"));
  }
}

export default new AuthService();
