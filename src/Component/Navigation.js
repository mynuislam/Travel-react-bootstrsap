import React, { Component, Fragment } from 'react'
import {Navbar,Nav,Button,Modal,Form} from 'react-bootstrap';
import './Style/bootstrap.min.css'
import './Style/Custom.css'
 class Navigation extends Component {
  constructor(){
    super();
    this.state={
    show:false
    }
    }
    handleClose =()=>{
this.setState({show:false})
}
handleShow =()=>{
this.setState({show:true})
  }    
 render() {
  return (
   <Fragment >
<Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">TRVL<i class="fab fa-typo3"></i></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
    </Nav>
    <Nav>
      <Nav.Link href="#Home"><div>Home</div></Nav.Link>
      <Nav.Link href="#Services"><div>Services</div></Nav.Link>
      <Nav.Link href="#Products"><div>Products</div></Nav.Link>
      <Nav.Link><Button onClick={this.handleShow} classname="signup" className="NavbarBtn" variant="dark">Sign Up</Button></Nav.Link>

    </Nav>


  </Navbar.Collapse>
  

</Navbar>
<Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Last name</Form.Label>
    <Form.Control  />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>First name</Form.Label>
    <Form.Control  />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email"/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" />
  </Form.Group>
  
  <Button variant="primary" onClick={this.handleClose}>
       Submit
          </Button>
</Form>


        </Modal.Body>
        
      </Modal>
   </Fragment>
  )
 }
}
export default Navigation;