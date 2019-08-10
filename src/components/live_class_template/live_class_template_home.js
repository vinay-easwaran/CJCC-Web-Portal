import React, { Component } from 'react';
import Navigation from '../Navigation';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

// CSS?

class Live_class_template_home extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      lists: [],
    };
    this.renderTable= this.renderTable.bind(this);
  }
  componentDidMount() {
      axios.get('https://looneyteamapi.herokuapp.com/classes')
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
          <td>{this.state.lists[x].class_id}</td>
          <td>{this.state.lists[x].is_part_of_program}</td>
          <td>{this.state.lists[x].lattitude}</td>
          <td>{this.state.lists[x].longitude}</td>
          <td>{this.state.lists[x].max_students}</td>
          <td>{this.state.lists[x].name}</td>
          <td>{this.state.lists[x].time_end}</td>
          <td>{this.state.lists[x].time_start}</td>
          <td>{this.state.lists[x].description}</td>
          <td>{this.state.lists[x].region_id}</td>
          <td>{this.state.lists[x].program_template_id}</td>
          <td>{this.state.lists[x].class_template_id}</td>
        </tr>
      )
    };
    return(
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>class_id</th>
            <th>is_part_of_program</th>
            <th>lattitude</th>
            <th>longitude</th>
            <th>max_students</th>
            <th>name</th>
            <th>time_end</th>
            <th>time_start</th>
            <th>description</th>
            <th>region_id</th>
            <th>program_template_id</th>
            <th>class_template_id</th>

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
              Live Class Template Tables
          </h1>

          <div>
          {this.renderTable()}
            {/* {this.state.lists.map((x) => {
              return (<div>
                <p> 
                class_id: {x.class_id}, is_part_of_program: {x.is_part_of_program} , lattitude: {x.lattitude}, longitude: {x.longitude}, max_students: {x.max_students}, name: {x.name}, time_end: {x.time_end},
                time_start: {x.time_start}, description: {x.description}, region_id: {x.region_id}, program_template_id: {x.program_template_id}, class_template_id:{x.class_template_id}
                </p>
              </div>)
          })} */}
        </div>
          
        </header>
      </div>
    );
  }
}

export default Live_class_template_home;
