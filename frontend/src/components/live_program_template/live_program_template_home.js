// import React, { Component } from 'react';
// import Navigation from '../Navigation'

// // CSS?

// class Live_program_template_home extends Component {
//   render() {
//     return (
//       <div>
//         <Navigation />
//         <header>
          
//           <div>
//             <h1>
//               Live program template Tables
//             </h1>
//           </div>
//         </header>
//       </div>
//     );
//   }
// }

// export default Live_program_template_home;
import React, { Component } from 'react';
import Navigation from '../Navigation'
import axios from 'axios';
import Table from 'react-bootstrap/Table';

import ReactTable from "react-table";
import "react-table/react-table.css";

class Live_program_template_home extends Component {
 
  constructor(props) {
    super(props);
 
    this.state = {
      lists: [],
    };
    this.renderTable = this.renderTable.bind(this);

  }
  componentDidMount() {
      axios.get('/api/liveprogram')
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
          <td>{this.state.lists[x].program_live_id}</td>
          <td>{this.state.lists[x].program_template_id}</td>
          <td>{this.state.lists[x].region_id}</td>
          <td>{this.state.lists[x].main_location}</td>
          <td>{this.state.lists[x].primary_teacher}</td>
          <td>{this.state.lists[x].start_date}</td>
          <td>{this.state.lists[x].end_date}</td>
        </tr>
      )
    };
    return(
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Program Live ID</th>
            <th>Program Template ID</th>
            <th>Region ID</th>
            <th>Main Location</th>            
            <th>Primary Teacher ID</th>
            <th>Start Date</th>
            <th>End Date</th>
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
        <h1> Live Program Tables</h1>
        <ReactTable
          data={lists}
          filterable
          defaultFilterMethod = {(filter,row) =>
          String(row[filter.id]).includes(filter.value)}
          columns = {[
            {
              Header: 'Program Live ID',
              columns: [{
                Header: 'sort',
                accessor: 'program_live_id'
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
              Header: 'Region ID',
              columns: [{
                Header: 'sort',
                accessor: 'region_id'
              }]
            },
            {
              Header: 'Main Location',
              columns: [{
                Header: 'sort',
                accessor: 'main_location'
              }]
            },
            {
              Header: 'Primary Teacher ID',
              columns: [{
                Header: 'sort',
                accessor: 'primary_teacher'
              }]
            },
            {
              Header: 'Start Date',
              columns: [{
                Header: 'sort',
                accessor: 'state_date'
              }]
            },
            {
              Header: 'End Date',
              columns: [{
                Header: 'sort',
                accessor: 'end_date'
              }]
            }
          ]}
        />

      </div>
 
 
    );
  }
}
 
 
 
 
export default Live_program_template_home;
