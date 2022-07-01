import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import AuthService from "../services/authservice";


 function  Login()  {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  

  // Input validation
  // const [inputValues, setInputValue] = useState({
  //   username: "",
  //   password: "",
  // });

  // const [validation, setValidation] = useState({
  //   username: "",
  //   password: "",
  // });

  // const checkValidation = () => {
  //   let errors = validation;

  //   //Username  validation
  //   if (!inputValues.username.trim()) {
  //     errors.username = "Username is required!";
  //   } else {
  //     errors.username = "";
  //   }

  //   if(!inputValues.password.trim()){
  //     errors.password = "Password is required!"
  //   }
  //   else{
  //     errors.password="";
  //   }
  //   setValidation(errors);
  // };
  // Input validation end

  // useEffect(() => {
  //   checkValidation();
  // }, [inputValues]);


  // function handleChange(event) {
  //   const { name, value } = event.target;
  //   setInputValue({ ...inputValues, [name]: value });
  // }

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  }; 
  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

      AuthService.login(username, password).then(
        () => {
          navigate("/profile");
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
      );

  };
  return (
  
      <div className="form">
        <Form className="form" onSubmit={handleLogin}>
        <Col>
        </Col>
        
         <FormGroup row>
         <Label for="name" sm={2}>User Name</Label>
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
          <Label for="name" sm={2}>password</Label>
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
            <Col sm={2}>
              </Col>
            <Col sm={4}>
              <div className="form-group">
                <button className="btn btn-primary btn-block" disabled={loading}>
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Login</span>
                </button>
              </div>
                {message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {message}
                    </div>
                  </div>
                )}
                   </Col>
           </FormGroup>
        </Form>
      </div>

  );
};
export default Login;