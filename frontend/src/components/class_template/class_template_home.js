import React, { Component } from 'react';
import Navigation from '../Navigation'
import axios from 'axios';
import Table from 'react-bootstrap/Table';

// CSS?

class Class_template_home extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      lists: [],
    };
    this.renderTable = this.renderTable.bind(this);

  }
  componentDidMount() {
      axios.get('https://looneyteamapi.herokuapp.com/class_template')
      .then(response => {
        console.log(response.data);
        this.setState({lists: response.data})
      })
  }
  renderTable(){
    let temp = [];
    for (var x=0; x<this.state.lists.length; x++){
      temp.push(
        <tr>
          <td>{this.state.lists[x].class_template_id}</td>
          <td>{this.state.lists[x].class_title}</td>
          <td>{this.state.lists[x].class_description}</td>
          <td>{this.state.lists[x].class_category}</td>
          <td>{this.state.lists[x].skills}</td>

        </tr>
      )
    };
    return(
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>class_template_id</th>
            <th>class_title</th>
            <th>class_description</th>            
            <th>class_category</th>
            <th>skills</th>

          </tr>
        </thead>
        <tbody>
          {temp}
        </tbody>
      </Table>
    )
  }
  render() {
    return (
      <div>
       <Navigation /> 
        <header>
         
            <h1>
              Class Template Tables
            </h1>
            <div>
            {this.renderTable()}

          {/* {this.state.lists.map((x) => {
            return (<div>
              <p> 
              class_template_id:{x.class_template_id}, class_title: {x.class_title}, class_description: {x.class_description}, class_category: {x.class_category}, skills: {x.skills}
              </p>
            </div>) */}
        {/* })} */}
  
  
          </div>
          
        </header>
      </div>
      
    );
  }
}

export default Class_template_home;
