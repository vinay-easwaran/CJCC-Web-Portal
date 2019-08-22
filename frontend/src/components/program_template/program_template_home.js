import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Navigation from '../Navigation'
import axios from 'axios'

import ReactTable from "react-table";
import "react-table/react-table.css";
// CSS?

// class Program_template_home extends Component {
//   render() {
//     return (
//       <div>
//         <Navigation />
//         <header>
//           <div>
//             <h1>
//               Program Template Tables
//             </h1>
//           </div>
//         </header>
//       </div>
      
//     );
//   }
// }

// export default Program_template_home;
class Program_template_home extends Component {
 
  constructor(props) {
    super(props);
 
    this.state = {
      lists: [],
    };
    this.renderTable = this.renderTable.bind(this);
  }
  componentDidMount() {
      axios.get('/api/program_template')
      .then(response => {
        console.log(response.data);
        this.setState({lists: response.data})
      })
  }
//  componentDidMount() {
  //    fetch('https://looneyteamapi.herokuapp.com/program_template')
  //      .then(response => response.json())
  //      .then(data => this.setState({ data }));
  //  }
  renderTable(){
    let temp = [];
    for (var x=0; x<this.state.lists.length; x++){
      temp.push(
        <tr>
          <td>{this.state.lists[x].program_template_id}</td>
          <td>{this.state.lists[x].program_title}</td>
          <td>{this.state.lists[x].program_description}</td>
        </tr>
      )
    };
    return(
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Program Template ID</th>
            <th>Program Title</th>
            <th>Program Description</th>
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
        <h1>Program Template Tables</h1>
        <ReactTable
          data={lists}
          filterable
          defaultFilterMethod = {(filter,row) =>
          String(row[filter.id]).includes(filter.value)}
          columns = {[
            {
              Header: 'Program Template ID',
              columns: [{
                Header: 'sort',
                accessor: 'program_template_id'
              }]
            },
            {
              Header: 'Program Title',
              columns: [{
                Header: 'Program Description',
                columns: [{
                  Header: 'sort',
                  accessor: 'program_title'
                }]
              }]
            },
            {
              Header: 'Program Description',
              columns: [{
                Header: 'sort',
                accessor: 'program_description'
              }]
            }

          ]}
        />
      </div>

      
    );
  }
}
 
 
 
 
export default Program_template_home;
