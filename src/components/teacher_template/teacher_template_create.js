import React from 'react';
import './teacher_template.css';
import axios from 'axios'
import {Container, Row, Col, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
import Navigation from '../Navigation'
 
 
 
class Teacher_template_form extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    email: "",
    verified: "",
    skills: "",
    specialty: "",
    level: "",
    address: "",
  }
 
change = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  });
};
 
onSubmit = (e) => {
  e.preventDefault();
  console.log(this.state);
  axios.post('http://looneyteamapi.herokuapp.com/teachers', {
    first_name: this.first_name,
    last_name: this.last_name,
    username: this.username,
    password: this.password,
    email: this.email ,
    verified: this.verified,
    skills: this.skills,
    specialty: this.specialty,
    level: this.level,
    address: this.address,
  },{headers: {'Accept': 'application/json'}})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
 
  this.setState({
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    email: "",
    verified: "",
    skills: "",
    specialty: "",
    level: "",
    address: "",
  })
};
 
 
  render() {
    return(
      <div>
      <Navigation />
      <h1> Create a new Teacher_Template Object </h1>
      <Form>
        <Row>
          <Col md={6}>
            <Label>First Name</Label>
            <Input
              name = "first_name"
              //placeholder="First Name"
              value = {this.state.first_name}
              onChange={e => this.change(e)}
            />
          </Col>
          <Col md={6}>
            <Label>Last Name</Label>
            <Input
              name = "last_name"
              //placeholder="Last Name"
              value = {this.state.last_name}
              onChange={e => this.change(e)}
            />
          </Col>
        </Row>
        <Row>
            <Col md = {12}>
            <Label>Address</Label>
            <Input
              name = "address"
              //placeholder="Address"
              value = {this.state.address}
              onChange={e => this.change(e)}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
          <Label>Username</Label>
          <Input
            name = "username"
            //placeholder="Username"
            value = {this.state.username}
            onChange={e => this.change(e)}
          />
          </Col>
          <Col md={6}>
          <Label>Password</Label>
          <Input
            name = "password"
            //placeholder="Password"
            value = {this.state.password}
            onChange={e => this.change(e)}
          />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
          <Label>Email</Label>
          <Input
            name = "email"
            placeholder="E-mail"
            value = {this.state.email}
            onChange={e => this.change(e)}
          />
          </Col>
          <Col md={6}>
          <Label>Verified Status</Label>
          <Input
            name = "verified"
            //placeholder="Verified status"
            value = {this.state.verified}
            onChange={e => this.change(e)}
          />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Label>Skills</Label>
            <Input
              type = 'textarea'
              name = "skills"
              placeholder="early learning, administrative capable, etc"
              value = {this.state.skills}
              onChange={e => this.change(e)}
            />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Label>Specialties</Label>
            <Input
              type = 'textarea'
              name = "specialty"
              placeholder="senior, pre-k, etc"
              value = {this.state.specialty}
              onChange={e => this.change(e)}
            />
          </Col>
        </Row>
 
        <Label>Level</Label>
        <Input
          name = "level"
          placeholder="master, volunteer, assistant, etc"
          value = {this.state.level}
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </Form>
    </div>
    
    );
  }
 
 
 
}
 
export default Teacher_template_form;