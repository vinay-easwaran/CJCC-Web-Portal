import React, { Component } from 'react';

import './HeaderAsset/header.css';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import {Nav, Navbar} from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Router } from "react-router"; 
import { LinkContainer } from "react-router-bootstrap";
import { Link,NavLink, Route } from 'react-router-dom';
//require('./menu-frame.css');
import ProgramTemplateForm from '../program_template/program_template_create';


class Header extends Component {

 
  render() {
    return (

    //   <Router>
    //   <div className="App">
    //     <Navbar>
    //       {/* "Link" in brand component since just redirect is needed */}
         
    //       <Nav>
    //         {/* "NavLink" here since "active" class styling is needed */}
    //         <Nav.Link as={NavLink} to="/" exact>
    //           Home
    //         </Nav.Link>
    //         {/* <Nav.Link as={NavLink} to="/another">
    //           Another
    //         </Nav.Link>
    //         <Nav.Link as={NavLink} to="/onemore">
    //           One More
    //         </Nav.Link> */}
    //       </Nav>
    //     </Navbar>
    //     <Route path="/" exact component={ProgramTemplateForm} />
    //     {/* <Route path="/another" exact component={Another} />
    //     <Route path="/onemore" exact component={Onemore} /> */}
    //   </div>
    // </Router>
      
      /* <header> */
         <nav>
          <ul>
            <li>
              <a href='#'>Program Template</a>
            </li>
            <li>
              <a href='#'>Class Template</a>
            </li>
            <li>
              <a href='#'>Teacher Template</a>
            </li>
            <li>
              <a href='#'>Program Live Table</a>
            </li>
            <li>
              <a href='#'>Class Live Table</a>
            </li>
            <li>
              <a href='#'>Approval Item</a>
            </li>
          </ul>
        </nav> 
        
    

      /* </header> */
      
    );
  }
}

export default Header;
