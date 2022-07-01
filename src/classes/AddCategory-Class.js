import React from 'react';
import axios from 'axios';
import './AddCategory.css';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import {useNavigate} from 'react-router-dom';

class AddCategoryclass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: '',
            mobile: '',
        }
        const navigate = useNavigate();
    }
    AddCategory = () => {
        axios.post('http://localhost:60671/api/DCandidate/', { fullName: this.state.fullName, mobile: this.state.mobile })
            .then(json => {
                if (json) {
                    alert("Data Saved Successfully");
                    //this.props.history.push('/CategoryList')
                    navigate('/CategoryList')
                    alert("after history called.");
                }
                else {
                    alert('Data not Saved');
                    //this.props.history.push('/CategoryList')
                   
                }
            })
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <Container className="App">
                <h4 className="PageHeading">Enter Category Informations</h4>
                <Form className="form">
                    <Col>
                        <FormGroup row>
                            <Label for="name" sm={2}>Full Name</Label>
                            <Col sm={10}>
                                <Input type="text" name="fullName" onChange={this.handleChange} value={this.state.fullName} placeholder="Enter fullName" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="mobile" sm={2}>mobile</Label>
                            <Col sm={10}>
                                <Input type="text" name="mobile" onChange={this.handleChange} value={this.state.mobile} placeholder="Enter mobile" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Col sm={5}>
                            </Col>
                            <Col sm={1}>
                                <button type="button" onClick={this.AddCategory} className="btn btn-success">Submit</button>
                            </Col>
                            <Col sm={1}>
                                <Button color="danger">Cancel</Button>{' '}
                            </Col>
                            <Col sm={5}>
                            </Col>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        );
    }
}
export default AddCategoryclass;