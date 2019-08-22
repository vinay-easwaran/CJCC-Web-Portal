import React from 'react';
import './teacher_template.css';
import axios from 'axios';
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
  axios.delete('/api/teacher_unavailability/' + this.state.teacher_id, {
  	data: { teacher_id: this.state.teacher_id, }
  })
  .then(function (response) {
  	console.log(response);
  })
  .catch(function (error) {
  	console.log(error);
  });

  axios.delete("/api/teachers/" + this.state.teacher_id, {
    data: { teacher_id: this.state.teacher_id }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  
  this.setState({
    teacher_id: "",
  })
};

render() {
  return(
  <div>
    <Navigation />
    <h1> Delete a existing Teacher Object </h1>
    <img id='ctdimage' src={require('../assets/ElmerFudd.png')} alt=''></img>
    <div>
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
  </div>
  );
}



}

export default Teacher_template_form_delete;
