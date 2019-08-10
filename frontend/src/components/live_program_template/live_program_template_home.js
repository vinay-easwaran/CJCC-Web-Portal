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

 
class Live_program_template_home extends Component {
 
  constructor(props) {
    super(props);
 
    this.state = {
      lists: [],
    };
    this.renderTable = this.renderTable.bind(this);

  }
  componentDidMount() {
      axios.get('https://looneyteamapi.herokuapp.com/liveprogram')
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
          <td>{this.state.lists[x].program_template_id}</td>
          <td>{this.state.lists[x].program_title}</td>
          <td>{this.state.lists[x].program_description}</td>
          <td>{this.state.lists[x].program_category_id}</td>

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
            <th>Program Category ID</th>
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
 
          <h1> Live Program Template Tables</h1>
          <div>
          {this.renderTable()}
          {/* {this.state.lists.map((x) => {
            return (<div>
              <p>program_template_id: {x.program_template_id}, program_title: {x.program_title} , program_description: {x.program_description}, program_category_id: {x.program_category_id}</p>
            </div>)
        })} */}
 
 
          </div>
        </header>
      </div>
 
 
    );
  }
}
 
 
 
 
export default Live_program_template_home;
