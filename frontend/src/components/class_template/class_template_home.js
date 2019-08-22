import React, { Component } from 'react';
import Navigation from '../Navigation'
import axios from 'axios';
import Table from 'react-bootstrap/Table';

import ReactTable from "react-table";
import "react-table/react-table.css";
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
      axios.get('/api/class_template')
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
    const {lists} = this.state
    return (
      <div>
       <Navigation />
       <ReactTable
       data={lists}
          filterable
          defaultFilterMethod = {(filter,row) =>
          String(row[filter.id]).includes(filter.value)}
          columns = {[
            {
              Header: 'Class Template ID',
              columns: [{
                Header: 'sort',
                accessor: 'class_template_id'
              }]
            },
            {
              Header: 'Class Title',
              columns: [{
                Header: 'sort',
                accessor: 'class_title'
              }]
            },
            {
              Header: 'Class Description',
              columns: [{
                Header: 'sort',
                accessor: 'class_description'
              }]
            },
            {
              Header: 'Class Category',
              columns: [{
                Header: 'sort',
                accessor: 'class_category'
              }]
            },
            {
              Header: 'Skills',
              columns: [{
                Header: 'sort',
                accessor: 'skills'
              }]
            }
          ]}
        />
      </div>
      
    );
  }
}

export default Class_template_home;
