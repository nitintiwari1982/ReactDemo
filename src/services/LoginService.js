import axios from "axios";

const API_URL_Login = "http://localhost:5000/api/auth/";
const LoginUser_API_URL = "http://localhost:5000/api/LoginUsers/";

const register = (firstName, lastName, email, username, password, isActive) =>
 {
  return axios.post(API_URL_Login + "Register/" , {
    "firstName": firstName,
    "lastName": lastName,
    "email": email,
    "username": username,
    "password" : password,
    "isActive": isActive
  });
};

const login = (username, password) => {
  return axios
        .post(API_URL_Login + "Login/" ,{ UserName: username, Password: password })
    .then((response) => {
      if (response.data.token) 
      {
        sessionStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};
const logout = () => {
  sessionStorage.removeItem("user");
};
const getCurrentUser = () => {
  return JSON.parse(sessionStorage.getItem("user"));
};

const getUserProfile = (username) => {
  return axios.get(LoginUser_API_URL + username);
};


const LoginService = {
  register,
  login,
  logout,
  getUserProfile,
  getCurrentUser,
};
export default LoginService;