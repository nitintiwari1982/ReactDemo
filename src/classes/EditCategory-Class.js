import React from 'react';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios'
import './AddCategory.css'
class EditCategoryClass extends React.Component {
    constructor(props) {
        super(props)
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            fullName: '',
            mobile: '',
        }
       
    }
    componentDidMount() {
      
        axios.get('http://localhost:60671/api/DCandidate/')
            .then(response => {
                this.setState({
                    fullName: response.data.fullName,
                    mobile: response.data.mobile
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    onChangeName(e) {
        this.setState({
            fullName: e.target.value
        });
    }
    onChangePrice(e) {
        this.setState({
            mobile: e.target.value
        });
    }
    onSubmit(e) {
        debugger;
        e.preventDefault();
        const obj = {
            //Id: this.props.match.params.id,
            fullName: this.state.fullName,
            mobile: this.state.mobile
        };
        axios.post('http://localhost:60671/api/DCandidate/UpdateCategory', obj)
            .then(res => { this.props.history.push('/CategoryList') });

    }
    render() {
        return (
            <Container className="App">
                <h4 className="PageHeading">Update Category Informations</h4>
                <Form className="form" onSubmit={this.onSubmit}>
                    <Col>
                        <FormGroup row>
                            <Label for="fullName" sm={2}>fullName</Label>
                            <Col sm={10}>
                                <Input type="text" name="fullName" value={this.state.fullName} onChange={this.onChangeName}
                                    placeholder="Enter fullName" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Password" sm={2}>mobile</Label>
                            <Col sm={10}>
                                <Input type="text" name="mobile" value={this.state.mobile} onChange={this.onChangePrice} placeholder="Enter fullName" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Col sm={5}>
                            </Col>
                            <Col sm={1}>
                                <Button type="submit" color="success">Submit</Button>{' '}
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
export default EditCategoryClass;