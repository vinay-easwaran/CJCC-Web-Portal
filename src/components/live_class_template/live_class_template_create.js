import React from 'react';
import './live_class_template.css';
import Navigation from '../Navigation'
import {Container, Row, Col, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";

class Live_class_template_form extends React.Component {

  state = {
    is_part_of_program: false,
    lattitude: "",
    longitude: "",
    max_students: "",
    name: "",
    time_start: "",
    time_end: "",
    description: "",
    region_id: "",
    program_template_id: "",
    class_template_id: "",
    specialty: "",
  }

change = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  });
};

onSubmit = (e) => {
  e.preventDefault();
  console.log(this.state);
  this.setState({
    is_part_of_program: false,
    lattitude: "",
    longitude: "",
    max_students: "",
    name: "",
    time_start: "",
    time_end: "",
    description: "",
    region_id: "",
    program_template_id: "",
    class_template_id: "",
    specialty: "",
  })
};

handleChange = () => {
    this.setState({
      is_part_of_program: true,
    })
};


  render() {
    return(
      <div>
      <Navigation />
      <h1> Create a New Live Class </h1>
      <Form>
        <Row>
        <Label>Is this part of a program? Check if True</Label>
        <Col sm={2}>
        <Input
          type="checkbox"
          value={this.state.is_part_of_program}
          onChange={this.handleChange}
        />
        </Col>
 
        </Row>
        <br />
        <Row>
        <Col md={6}>
        <Label>Lattitude</Label>
        <Input
          name = "lattitude"
          //placeholder="Lattitude"
          value = {this.state.lattitude}
          onChange={e => this.change(e)}
        />
        </Col>
        <Col md={6}>
        <Label>Longitude</Label>
        <Input
          name = "longitude"
          //placeholder="Longitude"
          value = {this.state.longitude}
          onChange={e => this.change(e)}
        />
        </Col>
        </Row>
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
          <Label>Max # Students</Label>
          <Input
            name = "max_students"
            //placeholder="Max Student Count"
            value = {this.state.max_students}
            onChange={e => this.change(e)}
          />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
          <Label>Start Time</Label>
          <Input
            name = "time_start"
            //placeholder="Time Start"
            value = {this.state.time_start}
            onChange={e => this.change(e)}
          />
          </Col>
          <Col md={6}>
          <Label>End Time</Label>
          <Input
            name = "time_end"
            //placeholder="Time End"
            value = {this.state.time_end}
            onChange={e => this.change(e)}
          />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={6}>
          <Label>Program Template ID</Label>
          <Input
            name = "program_template_id"
            //placeholder="Program Template Id"
            value = {this.state.program_template_id}
            onChange={e => this.change(e)}
          />
          </Col>
          <Col md={6}>
          <Label>Class Template ID</Label>
          <Input
            name = "class_template_id"
            //placeholder="Class Template Id"
            value = {this.state.class_template_id}
            onChange={e => this.change(e)}
          />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
          <Label>Description</Label>
          <Input
            type = 'textarea'
            name = "description"
            placeholder="..."
            value = {this.state.description}
            onChange={e => this.change(e)}
          />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
          <Label>Specialties</Label>
          <Input
            name = "specialty"
            placeholder="senior, pre-k, etc"
            value = {this.state.specialty}
            onChange={e => this.change(e)}
          />
          </Col>
        </Row>
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </Form>
    </div>
    );
  }



}

export default Live_class_template_form;
