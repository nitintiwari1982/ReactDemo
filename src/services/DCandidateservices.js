import axios from 'axios';

const DCANDIDATE_API_BASE_URL = "http://localhost:5000/api/DCandidate";

class DcandidateService {

  async  getCandidates()
    {
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
        return await axios.get(DCANDIDATE_API_BASE_URL+"/" , _headers );
    }

    createEmployee(employee){
        return axios.post(DCANDIDATE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(DCANDIDATE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employeeId, employee){
        return axios.put(DCANDIDATE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(DCANDIDATE_API_BASE_URL + '/' + employeeId);
    }
}

export default new DcandidateService()