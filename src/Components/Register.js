import React, { useState } from "react";
import AuthService from '../services/authservice';
import { useNavigate } from 'react-router-dom';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';

const Register = () => {

  //let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState("");
  const [message, setMessage] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

  const handleSubmission = () => {
		const formData = new FormData();

		formData.append('File', selectedFile);

		  fetch(
			'https://freeimage.host/api/1/upload?key=secureNitin1982',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};
	

  const onChangefirstName= (e) =>{
    const firstName = e.target.value;
    setFirstName(firstName);
  }
  const onChangelastName= (e) =>{
    const lastName = e.target.value;
    setlastName(lastName);
  }
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    setSuccessful(true);
    setMessage("");
      AuthService.register(firstName,lastName, email, username, password,isActive)
      .then( 
        () => {
          alert('Sucess REGISTER API');
      },
        (error) => {
          alert('Error in register API');
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setMessage(resMessage);
          setSuccessful(false);
        });
   
  };
  return (
   
    <div className="form">
       <h2>User Registration Form</h2>
        <Form className="form" onSubmit={handleRegister} >
         
            <FormGroup row>
             <Label for="FirstName" sm={2}>First Name</Label>
               <Col sm={4}>
                <input
                type="Text" className="form-control"
                 name="FirstName" value={firstName}
                   onChange={onChangefirstName} >
                </input>
                </Col>
              </FormGroup>

              <FormGroup row>
              <Label for="lastName" sm={2}>Last Name</Label>
               <Col sm={4}>
                <input
                type="Text" className="form-control"
                 name="lastName" value={lastName}
                   onChange={onChangelastName} >
                </input>
                </Col>
                </FormGroup>

              <FormGroup row>
              <Label for="username" sm={2}>User Name</Label>
               <Col sm={4}>
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                />
                 </Col>
               </FormGroup>

               <FormGroup row>
               <Label for="email" sm={2}>email</Label>
               <Col sm={4}>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                />
                </Col>
               </FormGroup>

               <FormGroup row>
               <Label for="password" sm={2}>Password</Label>
                <Col sm={4}>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={onChangePassword}
                  />
                </Col>
               </FormGroup>

               <FormGroup row>
               <Label for="profilePic" sm={2}>profilePic</Label>
               {isFilePicked  ? (
                        <div>
                          <p>Filename: {selectedFile.name}</p>
                          <p>Filetype: {selectedFile.type}</p>
                          <p>Size in bytes: {selectedFile.size}</p>
                          <p>
                            lastModifiedDate:{' '}
                            {selectedFile.lastModifiedDate.toLocaleDateString()}
                          </p>
                        </div>
                      ) : (
                        <p>Select a file to show details</p>
                      )}
                  <Col sm={4}>
                    <input type="file" name="file" onChange={changeHandler} />
                      <button onClick={handleSubmission}>Upload</button>
                  </Col>
               </FormGroup>

               <FormGroup row>
                 <Col sm={2}></Col>

                 <Col sm={2}>
                 <div className="form-group">
                <button className="btn btn-primary btn-block" disabled={successful}>
                  {successful && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Sign Up</span>
                </button>
              </div>
                {message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {message}
                    </div>
                  </div>
                )}
                  {/* <button className="btn btn-primary btn-block">Sign Up</button> */}
                </Col>

                <Col sm={2}></Col>
                </FormGroup>
        </Form>
      </div>
  );
};
export default Register;