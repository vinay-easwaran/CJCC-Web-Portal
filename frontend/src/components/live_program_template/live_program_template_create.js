import React from 'react';
import './live_program_template.css';
import Navigation from '../Navigation'
import axios from 'axios';
import {Container, Row, Col, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";

class Live_program_template_form extends React.Component {
  state = {
    region_id: "",
    program_template_id: "",
    main_location: "",
    primary_teacher: "",
    start_date: "",
    end_date: "",
  }

change = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  });
};

onSubmit = (e) => {
  e.preventDefault();
  console.log(this.state);
  axios.post('/api/liveprogram', {
    region_id: this.state.region_id,
    program_template_id: this.state.program_template_id,
    primary_teacher: this.state.primary_teacher,
    main_location: this.state.main_location,
    start_date: this.state.start_date,
    end_date: this.state.end_date,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  
  this.setState({
    region_id: "",
    program_template_id: "",
    main_location: "",
    primary_teacher: "",
    start_date: "",
    end_date: "",
  })
};

render() {
  return(
    <div>
    <Navigation />
    <div id='lptcpage'>
      <h1> Create a new Live Program Template Object </h1>
      <img id='lptcimage' src={require('../assets/porkyPig.png')} alt=''></img>
      <div id='lptcform'>
        <Form>
          <Row>
            <Col md={6}>
            <Label>Region ID</Label>
            <Input
              name = "region_id"
              //placeholder="Region ID"
              value = {this.state.region_id}
              onChange={e => this.change(e)}
            />
            </Col>
            <Col md={6}>
            <Label>Program Template ID</Label>
            <Input
              name = "program_template_id"
              //placeholder="Program Template ID"
              value = {this.state.program_template_id}
              onChange={e => this.change(e)}
            />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
            <Label>Primary Teacher</Label>
            <Input
              name = "primary_teacher"
              //placeholder="Primary Teacher"
              value = {this.state.primary_teacher}
              onChange={e => this.change(e)}
            />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
            <Label>Main Location</Label>
            <Input
              name = "main_location"
              //placeholder="Main Location"
              value = {this.state.main_location}
              onChange={e => this.change(e)}
            />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
            <Label>Start Date</Label>
            <Input
              name = "start_date"
              //placeholder="Start Date"
              value = {this.state.start_date}
              onChange={e => this.change(e)}
            />
            </Col>
            <Col md={6}>
            <Label>End Date</Label>
            <Input
              name = "end_date"
              //placeholder="End Date"
              value = {this.state.end_date}
              onChange={e => this.change(e)}
            />
            </Col>
          </Row>
          <button onClick={e => this.onSubmit(e)}>Submit</button>
        </Form>
      </div>
    </div>
  </div>
  );
}



}

export default Live_program_template_form;
