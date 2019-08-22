import React, { Component } from 'react';
import Navigation from '../Navigation';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

import ReactTable from "react-table";
import "react-table/react-table.css";
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
      axios.get('/api/classes')
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
    const {lists} = this.state
    return (
      <div>
        <Navigation />
        <h1>Live Class Template Tables</h1>
        <ReactTable
          data={lists}
          filterable
          defaultFilterMethod = {(filter,row) =>
          String(row[filter.id]).includes(filter.value)}
          columns = {[
            {
              Header: 'Class ID',
              columns: [{
                Header: 'sort',
                accessor: 'class_id'
              }]
            },
            {
              Header: 'Part of Program?',
              columns: [{
                Header: 'sort',
                accessor: 'is_part_of_program'
              }]
            },
            {
              Header: 'Lattitude',
              columns: [{
                Header: 'sort',
                accessor: 'lattitude'
              }]
            },
            {
              Header: 'Longitude',
              columns: [{
                Header: 'sort',
                accessor: 'longitude'
              }]
            },
            {
              Header: 'Name',
              columns: [{
                Header: 'sort',
                accessor: 'name'
              }]
            },
            {
              Header: 'Time Start',
              columns: [{
                Header: 'sort',
                accessor: 'time_start'
              }]
            },
            {
              Header: 'Time End',
              columns: [{
                Header: 'sort',
                accessor: 'time_end'
              }]
            },
            {
              Header: 'Description',
              columns: [{
                Header: 'sort',
                accessor: 'description'
              }]
            },
            {
              Header: 'Region ID',
              columns: [{
                Header: 'sort',
                accessor: 'region_id'
              }]
            },
            {
              Header: 'Program Template ID',
              columns: [{
                Header: 'sort',
                accessor: 'program_template_id'
              }]
            },
            {
              Header: 'Class Template ID',
              columns: [{
                Header: 'sort',
                accessor: 'class_template_id'
              }]
            }
          ]}
        />
      </div>
    );
  }
}

export default Live_class_template_home;
