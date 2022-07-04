import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom'
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios'
import '../../CSS/AddCategory.css'
import EmployeeService from '../../services/DCandidateservices';
import {useNavigate} from 'react-router-dom';


export default function EditCategory(props)
{
    const [id, setid] = useState('');
    const [fullName, setfullName] = useState('');
    const [mobile, setmobile] = useState('');
    const [email, setemail] = useState('');
    const [age, setage] = useState('');
    const [bloodGroup,setbloodGroup] = useState('');
    const [address,setaddress] = useState('');
    const { catid } = useParams();
    const navigate = useNavigate();


    useEffect (() =>{
        EmployeeService.getEmployeeById(catid)
        .then(res => {
            console.log(res.data.fullName);
              setid(res.data.id);
              setfullName(res.data.fullName);
              setmobile(res.data.mobile);
              setemail(res.data.email);
              setage(res.data.age);
              setbloodGroup(res.data.bloodGroup);
              setaddress(res.data.address);
        });
        console.log("useEffect ran...");
    },[]);

            const updateAPIData = () => {
                var dCandidate = {
                    id: id,
                    fullName: fullName,
                    mobile: mobile,
                    email : email,
                    age : age,
                    bloodGroup : bloodGroup,
                    address : address
                  };

                    EmployeeService.updateEmployee(catid,dCandidate);
                    navigate('/CategoryList')
            }

            const cancelHandle = () => {
                navigate('/CategoryList')
            }
       

        return (
            <Container className="App">
                <h4 className="PageHeading">Update Candidate Informations</h4>
                <Form className="form">
                    <Col>
                        <FormGroup row>
                            <Label for="fullName" sm={2}>Full Name</Label>
                            <Col sm={4}>
                                <Input type="text" name="fullName" value={fullName} onChange={(e) => setfullName(e.target.value)} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Password" sm={2}>Mobile</Label>
                            <Col sm={4}>
                                <Input type="text" name="mobile" value={mobile} onChange={(e) => setmobile(e.target.value)}  />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Email" sm={2}>Email</Label>
                            <Col sm={4}>
                                <Input type="text" name="email" value={email} onChange={(e) => setemail(e.target.value)}  />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="age" sm={2}>Age</Label>
                            <Col sm={4}>
                                <Input type="text" name="age" value={age} onChange={(e) => setage(e.target.value)}  />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="bloodGroup" sm={2}>Blood Group</Label>
                            <Col sm={4}>
                                <Input type="text" name="bloodGroup" value={bloodGroup} onChange={(e) => setbloodGroup(e.target.value)}  />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="address" sm={2}>Address</Label>
                            <Col sm={4}>
                                <Input type="text" name="address" value={address} onChange={(e) => setaddress(e.target.value)}  />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Col sm={5}>
                            </Col>
                            <Col sm={1}>
                                <Button type="submit" onClick={updateAPIData} color="success">Submit</Button>{' '}
                            </Col>
                            <Col sm={1}>
                                <Button color="danger" onClick={cancelHandle}>Cancel</Button>
                            </Col>
                            <Col sm={5}>
                            </Col>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        );
}