import React, { Component } from 'react';
import Navigation from '../Navigation'
import axios from 'axios'
import Table from 'react-bootstrap/Table';

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
      axios.get('https://looneyteamapi.herokuapp.com/teachers')
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
    return (
      <div>
         <Navigation />
          <header>
          <h1> Teacher Template Tables </h1>
          <div>
          {this.renderTable()}
          {/* {this.state.lists.map((x) => {
            return (<div>
              <p>username: {x.username}, first_name: {x.first_name} , last_name: {x.last_name},
              password: {x.password}, email: {x.email}, verified: {x.verified}, teacher_id: {x.teacher_id},
                skills: {x.skills}, address: {x.address}</p>
            </div>)
        })} */}
  
  
          </div>
        </header>
      </div>
      
    );
  }
}
 
 
 
 
export default Teacher_template_home;
