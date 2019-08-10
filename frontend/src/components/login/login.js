import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import fire from './Firebase/firebase';
// require('firebase/auth');
import Header from '../headerComponent/header';
import Homepage from '../pages/homePage';
import Footer from '../footerComponent/footer';
import Navigation from '../Navigation';
import * as ROUTES from '../Constants/routes';
import { Link,NavLink, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import ProgramTemplateFormCreate from '../program_template/program_template_create';
import TeacherTemplateFormCreate from '../teacher_template/teacher_template_create';
import ClassTemplateFormCreate from '../class_template/class_template_create';
import ProgramTemplateFormHome from '../program_template/program_template_home';
import TeacherTemplateFormHome from '../teacher_template/teacher_template_home';
import ClassTemplateFormHome from '../class_template/class_template_home';
import ProgramTemplateFormDelete from '../program_template/program_template_delete';
import TeacherTemplateFormDelete from '../teacher_template/teacher_template_delete';
import ClassTemplateFormDelete from '../class_template/class_template_delete';
import liveProgramTemplateFormCreate from '../live_program_template/live_program_template_create';
import liveProgramTemplateFormDelete from '../live_program_template/live_program_template_delete';
import liveClassTemplateFormCreate from '../live_class_template/live_class_template_create';
import liveClassTemplateFormDelete from '../live_class_template/live_class_template_delete';
import liveProgramTemplateFormHome from '../live_program_template/live_program_template_home';
import liveClassTemplateFormHome from '../live_class_template/live_class_template_home';
import Home from '../pages/homePage'

require('./login.css');



class LoginPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      routeToHome: false
    };
  }
  onEmailChange(e){
    this.setState({email: e.target.value});
  }
  onPasswordChange(e){
    this.setState({password: e.target.value});
  }
 
  submitLogin(e) {
    e.preventDefault();
    if (this.state.email != "" && this.state.password != ""){
      this.setState({routeToHome: true});
    }
  }
  renderLogin(){
    return (
      <Container fluid={true} className="login-container">
      
        <Row className="login-row">
          <Col className="login-col" sm={2} lg={3} xl={4}></Col>
          <Col className="login-col" xs={12} sm={8} lg={6} xl={4}><img className="login-logo1" src={require('../assets/logo.png')} alt="logo"></img></Col>
          <Col className="login-col" sm={2} lg={3} xl={4}></Col>
        </Row>
        
        <Row className="login-row">
          {/* <Col className="login-col" sm={2} lg={3} xl={4}></Col> */}
          <Col className="login-col login-box" xs={12}>

          {/* <Col className="login-col login-box" xs={12} sm={8} lg={6} xl={4}> */}
            <Row className="login-row">
              <Col className="login-col" lg={1}></Col>
              <Col className="login-col margin" lg={10}><div className="signin-text">Administrator Login</div></Col>
              <Col className="login-col" lg={1}></Col>
            </Row>

            <Row>
              <Col className="login-col" sm={4}></Col>
              <Col className="login-col" sm={4}>
                <form method="post" onSubmit={this.submitLogin.bind(this)}>
                  {/* <input className="login-input-field" type="text" name="eventname" placeholder="Event Name" onChange={this.onEventNameChange.bind(this)} /> */}
                  <input className="login-input-field" type="text" name="email" placeholder="Email" onChange={this.onEmailChange.bind(this)} />
                  <input className="login-input-field" type="password" name="password" placeholder="Password" onChange={this.onPasswordChange.bind(this)} />
                  {this.state.accountInvalid && <label className="error">{this.state.loginError}</label>}
                  <input className="login-submit" type="submit" value="SIGN IN" />
                </form>
              </Col>
              <Col className="login-col" sm={4}></Col>
            </Row>
          </Col>
        </Row>
        <Row className="login-row">
          <Col className="login-col" lg={3} xl={4}></Col>
          <Col className="login-col" xs={12} lg={6} xl={4}></Col>
          <Col className="login-col" lg={3} xl={4}></Col>
        </Row>
      </Container>
    )
  }
  someFn = () =>{
    
    this.props.callbackFromParent(this.state.routeToHome);
}
  
  render(){
    return (
      <div>
        { !this.state.routeToHome && this.renderLogin()}
        {this.state.routeToHome && 
          <div>
            <Router>
            <Route exact path="/" render={() => (
            this.state.routeToHome ? (
              <Redirect to="/home"/>
            ) : (
              <Redirect to="/"/>
            )
          )}/>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route exact path={ROUTES.ptf} component={ProgramTemplateFormHome} />
          <Route exact path={ROUTES.ttf} component={TeacherTemplateFormHome} />
          <Route exact path={ROUTES.ctf} component={ClassTemplateFormHome} />
          <Route exact path={ROUTES.ptfc} component={ProgramTemplateFormCreate} />
          <Route exact path={ROUTES.ttfc} component={TeacherTemplateFormCreate} />
          <Route exact path={ROUTES.ctfc} component={ClassTemplateFormCreate} />
          <Route exact path={ROUTES.ptfd} component={ProgramTemplateFormDelete} />
          <Route exact path={ROUTES.ttfd} component={TeacherTemplateFormDelete} />
          <Route exact path={ROUTES.ctfd} component={ClassTemplateFormDelete} />
          <Route exact path={ROUTES.lptc} component={liveProgramTemplateFormCreate} />
          <Route exact path={ROUTES.lptd} component={liveProgramTemplateFormDelete} />
          <Route exact path={ROUTES.lctc} component={liveClassTemplateFormCreate} />
          <Route exact path={ROUTES.lctd} component={liveClassTemplateFormDelete} />
          <Route exact path={ROUTES.lpt} component={liveProgramTemplateFormHome} />
          <Route exact path={ROUTES.lct} component={liveClassTemplateFormHome} />
          </Router>
          
            
            
          </div>
        }
        
      </div>
      
      
      
    );
  }
}
export default LoginPage;
