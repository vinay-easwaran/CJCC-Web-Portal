import React from 'react';
import './program_template.css';
import axios from 'axios';
import Navigation from '../Navigation'

class Program_template_form_delete extends React.Component {
  state = {
    program_template_id: "",
  }

change = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  });
};

onSubmit = (e) => {
  e.preventDefault();
  console.log(this.state);
  axios.delete("/api/program_template/" + this.state.program_template_id, {
    data: { program_template_id: this.state.program_template_id, }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  this.setState({
    program_template_id: "",
  })
};

  render() {
    return(
    <div>
      <Navigation />
      <h1> Delete a existing Program_Template Object </h1>
      <form>
        <input
          name = "program_template_id"
          placeholder="Program ID"
          value = {this.state.program_template_id}
          onChange={e => this.change(e)}
        />
        <br />
        <br/>
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    </div>
    );
  }



}

export default Program_template_form_delete;
