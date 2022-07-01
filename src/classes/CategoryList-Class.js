
import React, { useEffect, useState, Component  } from "react"
import axios from 'axios';
import Table from '../Table';
import EmployeeService from '../services/DCandidateservices';
import './App.css';
import ReactPaginate from 'react-paginate';


export default class Categorylist extends Component { 
    constructor(props) {  
        super(props);  
        this.state = {
          business: [],

        }; 
        const PER_PAGE = 15;
      }

componentDidMount(){  
      
    EmployeeService.getEmployees()
    .then((response) => {
      this.setState({business : response.data});

    })
    .catch(function (error){
      console.log(error);
    })

        // axios.get('http://localhost:5000/api/DCandidate')  
        //   .then(response => {  
        //     this.setState({ business: response.data });  
        //   })  
        //   .catch(function (error) {  
        //     console.log(error);  
        //   })  
}  
        
      tabRow(){  
        return this.state.business.map(function(object, i){  
            return <Table obj={object} key={i} />;  
        });  
      }  
    
      render() {  
        return (  
          <div>  
            <h4 align="center">Student List</h4>  
            <table className="table table-striped" style={{ marginTop: 10 }}>  
              <thead>  
                <tr>  
                  <th>Full Name</th>  
                  <th>Mobile</th>  
                  <th>Email</th>  
                  <th>Age</th>  
                  <th>Blood Group</th>  
                  <th>Address</th>  
                  <th colSpan="4">Action</th>  
                </tr>  
              </thead>  
              <tbody>  
               { this.tabRow() }   
              </tbody>  
            </table>  
          </div>  
        );  
      }  
    }
