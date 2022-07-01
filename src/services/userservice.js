import axios from "axios";
const API_URL_LoginUser = "http://localhost:5000/api/LoginUsers/";

class LoginUser
{

 getUserProfile(username){
   // alert('getUserProfile');
    return axios.get(API_URL_LoginUser + username);
  }

}
  export default new LoginUser();
