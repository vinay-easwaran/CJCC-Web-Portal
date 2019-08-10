import React from 'react';
import './teacher_template.css';
import Navigation from '../Navigation'

class Teacher_template_form_delete extends React.Component {
  state = {
    teacher_id: "",
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
    program_id: "",
  })
};

  render() {
    return(
    <div>
      <Navigation />
      <h1> Delete a existing Teacher_Template Object </h1>
      <form>
        <input
          name = "teacher_id"
          placeholder="Teacher ID"
          value = {this.state.teacher_id}
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
        <br />
      </form>
    </div>
    );
  }



}

export default Teacher_template_form_delete;
