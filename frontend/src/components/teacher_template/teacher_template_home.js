import React, { Component } from 'react';
import Navigation from '../Navigation'
import axios from 'axios'
import Table from 'react-bootstrap/Table';

import ReactTable from "react-table";
import "react-table/react-table.css";
// CSS?

// class Teacher_template_home extends Component {
//   render() {
//     return (
//       <div>
//         <Navigation />
//         <header>
//         <div>
//           <h1>
//             Teacher Template Tables
//           </h1>
//         </div>
//       </header>
//       </div>
      
//     );
//   }
// }

// export default Teacher_template_home;
// import React, { Component } from 'react';
//import json_data from './program_template_data.json';
// import {BootstrapTable,
//        TableHeaderColumn} from 'react-bootstrap-table';
// import axios from 'axios'
//import '../css/Table.css';
//import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
 
 
 
class Teacher_template_home extends Component {
 
  constructor(props) {
    super(props);
 
    this.state = {
      lists: [],
    };
    this.renderTable = this.renderTable.bind(this);
  }
  componentDidMount() {
      axios.get('/api/teachers')
      .then(response => {
        console.log(response.data);
        this.setState({lists: response.data})
      })
  }

 // componentDidMount() {
 //     fetch('/api/teachers')
 //       .then(response => response.json())
 //       .then(data => this.setState({ data }));
 //   }

  renderTable(){
    let temp = [];
    for (var x=0; x<this.state.lists.length; x++){
      temp.push(
        <tr>
          <td>{this.state.lists[x].username}</td>
          <td>{this.state.lists[x].first_name}</td>
          <td>{this.state.lists[x].last_name}</td>
          <td>{this.state.lists[x].password}</td>
          <td>{this.state.lists[x].email}</td>
          <td>{this.state.lists[x].verified}</td>
          <td>{this.state.lists[x].teacher_id}</td>
          <td>{this.state.lists[x].skills}</td>
          <td>{this.state.lists[x].address}</td>
        </tr>
      )
    };
    return(
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>username</th>
            <th>first_name</th>
            <th>last_name</th>            
            <th>password</th>
            <th>email</th>
            <th>verified</th>
            <th>teacher_id</th>
            <th>skills</th>
            <th>address</th>

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
        <h1> Teacher Template Tables </h1>
        <ReactTable
          data={lists}
          filterable
          defaultFilterMethod = {(filter,row) =>
          String(row[filter.id]).includes(filter.value)}
          columns = {[
            {
              Header: 'Username',
              columns: [{
                Header: 'sort',
                accessor: 'username'
              }]
            },
            {
              Header: 'First Name',
              columns: [{
                Header: 'sort',
                accessor: 'first_name'
              }]
            },
            {
              Header: 'Last Name',
              columns: [{
                Header: 'sort',
                accessor: 'last_name'
              }]
            },
            {
              Header: 'Password',
              columns: [{
                Header: 'sort',
                accessor: 'password'
              }]
            },
            {
              Header: 'Email',
              columns: [{
                Header: 'sort',
                accessor: 'email'
              }]
            },
            {
              Header: 'Verified',
              columns: [{
                Header: 'sort',
                accessor: 'verified'
              }]
            },
            {
              Header: 'Teacher ID',
              columns: [{
                Header: 'sort',
                accessor: 'teacher_id'
              }]
            },
            {
              Header: 'Skills',
              columns: [{
                Header: 'sort',
                accessor: 'skills'
              }]
            },
            {
              Header: 'Address',
              columns: [{
                Header: 'sort',
                accessor: 'address'
              }]
            }
          ]}
        />
      </div>
      
    );
  }
}
 
 
 
 
export default Teacher_template_home;
