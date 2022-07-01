import axios from 'axios';
import authHeader from './auth-header';

const EMPLOYEE_API_BASE_URL = "http://localhost:5000/api/DCandidate";

class EmployeeService {

     authHeader() {
        const user = JSON.parse(sessionStorage.getItem('user'));
        if (user && user.token) {
          alert(user.token);
          return { Authorization: 'Bearer ' + user.token }
        } else {
          return {};
        }
      }

      getCandidates()
    {
     // console.log('event raised');
        var _headers = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        const user = JSON.parse(sessionStorage.getItem('user'));
        var token= null;
      
        if (user != null && user.token != null)
         {
          token = user.token;
          _headers.headers['Authorization'] = "Bearer " + token;
        }
        else
        {
        console.log('user not exists in session storage.');
        }
        return axios.get(EMPLOYEE_API_BASE_URL+"/" , _headers );
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employeeId, employee){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

export default new EmployeeService()