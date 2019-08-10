import React from 'react';
import './program_template.css';
import Navigation from '../Navigation'

class Program_template_form_delete extends React.Component {
  state = {
    program_id: "",
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
      <h1> Delete a existing Program_Template Object </h1>
      <form>
        <input
          name = "program_id"
          placeholder="Program ID"
          value = {this.state.program_id}
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    </div>
    );
  }



}

export default Program_template_form_delete;
