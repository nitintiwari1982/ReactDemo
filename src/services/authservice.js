import axios from "axios";
const API_URL_Login = "http://localhost:5000/api/auth/Login/";
const API_URL = "http://localhost:5000/api/auth/Register/";

const register = (firstName, lastName, email, username, password, isActive) => {
 // alert(API_URL + firstName+ lastName+ email+ username+ password,isActive);

  return axios.post(API_URL , {
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
        .post(API_URL_Login ,{ UserName: username, Password: password })
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


const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};
export default AuthService;