import React from 'react';
import './class_template.css';
import Navigation from '../Navigation'
import {Container, Row, Col, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";

class Class_template_form extends React.Component {
  state = {
    class_title: "",
    class_description: "",
    specialty: "",
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
    class_title: "",
    class_description: "",
    specialty: "",
    skills: "",
  })
};

  render() {
    return(
      <div>
      <Navigation />
      <h1> Create a new Class_Template Object</h1>
 
      <Form>
        <Row form>
          <Col md={12}>
          <FormGroup>
              <Label>Class Title</Label>
              <Input id='title'
                name = "class_title"
                //placeholder="Class Title"
                value = {this.state.class_title}
                onChange={e => this.change(e)}
              />
          </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <FormGroup>
              <Label>
                Class Description
              </Label>
                <Input
                  type = 'textarea'
                  name = "class_description"
                  placeholder="..."
                  value = {this.state.class_description}
                  onChange={e => this.change(e)}
                />
            </FormGroup>
          </Col>
        </Row>
        <Row>
            <Col md={6}>
              <FormGroup>
                <Label>
                  Specialties
                </Label>
                  <Input
                    type = 'textarea'
                    name = "specialty"
                    placeholder="Specialty"
                    value = {this.state.specialty}
                    onChange={e => this.change(e)}
                  />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
              <Label>Skills</Label>
              <Input
                type = 'textarea'
                name = "skills"
                placeholder="Skills"
                value = {this.state.skills}
                onChange={e => this.change(e)}
              />
              </FormGroup>
            </Col>
        </Row>
 
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </Form>
 
    </div>
    );
  }



}

export default Class_template_form;
