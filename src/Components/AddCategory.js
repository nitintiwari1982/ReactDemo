import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/AddCategory.css';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import {useNavigate} from 'react-router-dom';


function AddCategory()  {

    const [fullName, setfullName] = useState('');
    const [mobile, setmobile] = useState('');
    const [email, setemail] = useState('');
    const [age, setage] = useState('');
    const [bloodGroup,setbloodGroup] = useState('');
    const [address,setaddress] = useState('');
    const [loading,setLoading] = useState(false);
    const [message,setMessage] = useState('');
    const navigate = useNavigate();
    
   const clearFields =() => {
    setfullName('');
    setmobile('');
    setemail('');
    setage('');
    setbloodGroup('');
    setaddress('');

   }

    function AddCategoryMethod() {
        setLoading(true);
        axios.post('http://localhost:5000/api/DCandidates/', 
        { 
            "fullName": fullName,
             "mobile": mobile ,
             "email": email,
             "age": age,
             "bloodGroup": bloodGroup,
             "address": address
        })
        .then(json => {
                if (json) {
                    setLoading(false);
                    setMessage("Candidate has been saved successfully!")
                }
                else {
                    setMessage("Candidate save failed!")
                }
        },
        (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
             
            setLoading(false);
            setMessage(resMessage);
          }
        )

    }

    
    return (

        <div className="form">
                <h4 className="PageHeading">Enter Candidate Informations</h4>
                <Form className="form">
                    <Col>
                        <FormGroup row>
                            <Label for="name" sm={2}>Full Name</Label>
                            <Col sm={4}>
                                <Input type="text" name="fullName" onChange={(e) => setfullName(e.target.value)} value={fullName} placeholder="Enter fullName" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="mobile" sm={2}>Mobile</Label>
                            <Col sm={4}>
                                <Input type="text" name="mobile" onChange={(e) => setmobile(e.target.value)} value={mobile} placeholder="Enter mobile" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="email" sm={2}>Email</Label>
                            <Col sm={4}>
                                <Input type="text" name="email" onChange={(e) => setemail(e.target.value)} value={email} placeholder="Enter email" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="age" sm={2}>Age</Label>
                            <Col sm={4}>
                                <Input type="text" name="age" onChange={(e) => setage(e.target.value)} value={age} placeholder="Enter age" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="bloodGroup" sm={2}>Blood Group</Label>
                            <Col sm={4}>
                                <Input type="text" name="bloodGroup" onChange={(e) => setbloodGroup(e.target.value)} value={bloodGroup} placeholder="Enter Blood Group" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="address" sm={2}>Address</Label>
                            <Col sm={4}>
                                <Input type="text" name="address" onChange={(e) => setaddress(e.target.value)} value={address} placeholder="Enter address" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup row>
                           
                            <Col sm={5}>
                           
                                <button className="btn btn-success" disabled={loading} onClick={AddCategoryMethod}>  
                                {loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                               Save
                                </button>
                          
                            {message && (
                                <div className="alert alert-danger" role="alert">
                                    {message}
                                </div>
                            )}
                            </Col>
                            <Col sm={3}>
                                <Button color="danger" onClick={clearFields}>Clear fields</Button>{' '}
                            </Col>
                            <Col sm={2}>
                                
                            </Col>
                        </FormGroup>
                    </Col>
        
                </Form>
        </div>      
    )
}
export default AddCategory;