import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Navigation from '../Navigation'
import axios from 'axios'
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
      axios.get('https://looneyteamapi.herokuapp.com/program_template')
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
    return (
      <div>
        <Navigation />
        <header>
          
          <h1> Program Template Tables </h1>
          <div>
          {this.renderTable()}
          
  
  
          </div>
        </header>
      </div>

      
    );
  }
}
 
 
 
 
export default Program_template_home;
