import React, { Component } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import EmployeeService from '../services/DCandidateservices';
import '../App.css';

export default function Table (props) {

   // alert(props.obj.id);
    //alert(props.obj.fullName);

    const navigate = useNavigate();

    const DeleteCategoty= () =>{  
        alert('data deleted start');
        EmployeeService.deleteEmployee(props.obj.id)
        .then(res => {
            if(res.data != null){
                console.log(res.data)
                navigate('/AddCategory'); 
            }
        });
    }
        return (
            <tr >
                 <td >
                    {props.obj.id}
                </td>
                <td>
                    {props.obj.fullName}
                </td>
                <td>
                    {props.obj.mobile}
                </td>
                <td>
                    {props.obj.email}
                </td>
                <td>
                    {props.obj.age}
                </td>
                <td>
                    {props.obj.bloodGroup}
                </td>
                <td>
                    {props.obj.address}
                </td>
                <td>
                    {/* <Link to={"/EditCategory/" + this.props.obj.id} className="btn btn-success">Edit</Link> */}
                    <Link to={"/EditCategory/" + props.obj.id} className="btn btn-success">Edit</Link>
                </td>
                <td>  
                     <button type="button" onClick={DeleteCategoty} className="btn btn-danger">Delete</button>  
                 </td> 
            </tr>
        );
    
}
