import React from 'react';
import './live_class_template.css';
import axios from 'axios';
import Navigation from '../Navigation'

class Live_class_template_form_delete extends React.Component {
  state = {
    live_class_template_id: "",
  }

change = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  });
};

onSubmit = (e) => {
  e.preventDefault();
  console.log(this.state);
  axios.delete("/api/class_teacher_counts/" + this.state.live_class_template_id, {
    data: {live_class_template_id: this.state.live_class_template_id, }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  axios.delete("/api/classes/" + this.state.live_class_template_id, {
    data: {live_class_template_id: this.state.live_class_template_id, }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  this.setState({
    live_class_template_id: "",
  })
};

render() {
  return(
  <div>
    <Navigation />
    <div id='lctdpage'>
      <h1> Delete a existing Live Class Template Object </h1>
      <img id='lctdimage' src={require('../assets/marvinMartian.png')} alt=''></img>
      <div id='lctdform'>
        <form>
          <input
            name = "live_class_template_id"
            placeholder="Live Class Template ID"
            value = {this.state.live_class_template_id}
            onChange={e => this.change(e)}
          />
          <br />
          <button onClick={e => this.onSubmit(e)}>Submit</button>
          <br />
        </form>
      </div>
    </div>
  </div>
  );
}



}

export default Live_class_template_form_delete;
