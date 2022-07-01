import React, { Component } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
class Table extends Component {
    constructor(props) {
        super(props);
    }
   
    DeleteCategoty= () =>{  
        alert('data deleted start');
        axios.delete('http://localhost:5000/api/DCandidate/'+ this.props.obj.id)  
       .then(json => {  
       if(json.data.Status==='Delete'){  
        alert('Record deleted successfully!!');  
            }  
         })  
       }  
    render() {
        return (
            <tr>
                 <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.fullName}
                </td>
                <td>
                    {this.props.obj.mobile}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    {this.props.obj.age}
                </td>
                <td>
                    {this.props.obj.bloodGroup}
                </td>
                <td>
                    {this.props.obj.address}
                </td>
                <td>
                    {/* <Link to={"/EditCategory/" + this.props.obj.id} className="btn btn-success">Edit</Link> */}
                    <Link to={"/EditCategory/" + this.props.obj.id} className="btn btn-success">Edit</Link>
                </td>
                <td>  
                     <button type="button" onClick={this.DeleteCategoty} className="btn btn-danger">Delete</button>  
                 </td> 
            </tr>
        );
    }
}
export default Table;