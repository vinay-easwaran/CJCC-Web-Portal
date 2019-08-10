import React from 'react';
import './class_template.css';
import Navigation from '../Navigation'

class Class_template_form_delete extends React.Component {
  state = {
    class_template_id: "",
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
      <h1> Delete a existing Class_Template Object </h1>
      <form>
        <input
          name = "class_template_id"
          placeholder="Class ID"
          value = {this.state.class_template_id}
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

export default Class_template_form_delete;
