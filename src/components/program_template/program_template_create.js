import React from 'react';
import './program_template.css';
import Navigation from '../Navigation'
import {Container, Row, Col, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";

class ProgramTemplateForm extends React.Component {
  state = {
    program_title: "",
    program_description: "",
    program_specialties: "",
    skills: "",
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
    program_title: "",
    program_description: "",
    program_specialties: "",
    skills: "",
  })
};

  render() {
    return(
      <div>
      <Navigation />
      <h1> Create a new Program_Template Object </h1>
      <Form>
        <Row>
        <Label>Program Title</Label>
        <Input
          name = "program_title"
          //placeholder="Program Title"
          value = {this.state.program_title}
          onChange={e => this.change(e)}
        />
        </Row>
        <Row>
        <Label>Description</Label>
        <Input
          type = 'textarea'
          name = "program_description"
          //placeholder="Program Description"
          value = {this.state.program_description}
          onChange={e => this.setState( { program_description: e.target.value} )}
        />
        </Row>
        <Row>
        <Label>Specialties</Label>
        <Input
          name = "program_specialties"
          placeholder="senior, pre-k, etc"
          value = {this.state.program_specialties}
          onChange={e => this.setState( { program_specialties: e.target.value} )}
        />
        </Row>
        <Row>
        <Label>Skills</Label>
        <Input
          name = "skills"
          placeholder="administrative capable, etc"
          value = {this.state.skills}
          onChange={e => this.setState( { skills: e.target.value} )}
        />
        </Row>
        <br/>
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </Form>
    </div>
    );
  }



}

export default ProgramTemplateForm;
