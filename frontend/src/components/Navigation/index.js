import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../Constants/routes';
// import Homepage from '../components/pages/homePage';
import {Nav, NavDropdown} from 'react-bootstrap';

require('./style.css');


const Navigation = () => (
  <div>
    {/* <ul>
      
      <li>
        <Link to={ROUTES.LANDING}>Home</Link>
        
      </li>
      <li>
        <Link to={ROUTES.ptf}>Program template form</Link>
      </li>

      <li>
        <Link to={ROUTES.ttf}>Teacher template form</Link>
      </li>

      <li>
        <Link to={ROUTES.ctf}>Class template form</Link>
      </li>
      
    </ul> */}
   <Nav variant="pills" >
        
        <NavDropdown title="Program" id="nav-dropdown-program" >
          <NavDropdown.Item eventKey="createProgram"><Link to={ROUTES.ptfc}>Create Program template form</Link></NavDropdown.Item>
          
          <NavDropdown.Divider />

          <NavDropdown.Item eventKey="deleteProgram"><Link to={ROUTES.ptfd}>Delete Program template form</Link></NavDropdown.Item>

           <NavDropdown.Divider />

          <NavDropdown.Item eventKey="ProgramHome"><Link to={ROUTES.ptf}>Programs </Link></NavDropdown.Item>
         
        </NavDropdown>

        <NavDropdown title="Teacher" id="nav-dropdown-teacher">
          <NavDropdown.Item eventKey="createTeacher"> <Link to={ROUTES.ttfc}>Create Teacher template form</Link></NavDropdown.Item>
          
          <NavDropdown.Divider />

           <NavDropdown.Item eventKey="createTeacher"> <Link to={ROUTES.ttfd}>Delete Teacher template form</Link></NavDropdown.Item>

            <NavDropdown.Divider />

            <NavDropdown.Item eventKey="TeacherHome"> <Link to={ROUTES.ttf}>Teachers</Link></NavDropdown.Item>
         
        </NavDropdown>

        <NavDropdown title="Class" id="nav-dropdown-class">
          <NavDropdown.Item eventKey="createClass"> <Link to={ROUTES.ctfc}>Create Class template form</Link></NavDropdown.Item>
          
          <NavDropdown.Divider />

          <NavDropdown.Item eventKey="createClass"> <Link to={ROUTES.ctfd}>Delete Class template form</Link></NavDropdown.Item>

          <NavDropdown.Divider />

          <NavDropdown.Item eventKey="ClassHome"> <Link to={ROUTES.ctf}>Classes </Link></NavDropdown.Item>
         
        </NavDropdown>

        <NavDropdown title="Live Program" id="nav-dropdown-class">
          <NavDropdown.Item eventKey="createliveProgram"> <Link to={ROUTES.lptc}>Create Live Program template form</Link></NavDropdown.Item>
          
          <NavDropdown.Divider />

          <NavDropdown.Item eventKey="deleteliveProgram"> <Link to={ROUTES.lptd}>Delete Live Program template form</Link></NavDropdown.Item>

          <NavDropdown.Divider />

          <NavDropdown.Item eventKey="liveProgramHome"> <Link to={ROUTES.lpt}>Live Programs</Link></NavDropdown.Item>
        
        </NavDropdown>

        <NavDropdown title="Live Class" id="nav-dropdown-class">
          <NavDropdown.Item eventKey="createliveClass"> <Link to={ROUTES.lctc}>Create Live Class template form</Link></NavDropdown.Item>
          
          <NavDropdown.Divider />

          <NavDropdown.Item eventKey="deleteliveClass"> <Link to={ROUTES.lctd}>Delete Live Class template form</Link></NavDropdown.Item>

          <NavDropdown.Divider />

          <NavDropdown.Item eventKey="liveClassHome"> <Link to={ROUTES.lct}>Live Classes</Link></NavDropdown.Item>
         
        </NavDropdown>
      </Nav>

      
  </div>
  

    
 
);

export default Navigation;