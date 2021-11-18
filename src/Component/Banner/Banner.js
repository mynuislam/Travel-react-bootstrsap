import React, { Component,Fragment } from 'react'
// import video from './videos/video-2.mp4'
import { Player,BigPlayButton } from 'video-react';
import './video-react.css'
import videoposter from '../CardSec/Images/img-8.jpg'
import BannerBg from '../Banner/images/img-home.jpg'
import {Container,Button, Row, Col,Modal} from 'react-bootstrap'
class Banner extends Component {
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
   <Fragment>
{/* <video className="myvideo1" expand  autoPlay loop muted >
    <source src={video} type='video/mp4'/>
</video> */}
<Container  fluid={true} className=" p-0" >
<Row >
  <div className="myvideodiv">
  <img  className="myvideo" src={BannerBg} alt=""/>
  </div>
</Row>

  </Container>
<div className="textop"><Container>   
 <Row>
  <Col> <h1>ADVENTURE AWAITS</h1></Col>
 </Row>
 </Container>
 <Container>   
 <Row>
  <Col> <p>What are you waiting for?</p></Col>
 </Row>
 </Container>
 <Container>   
 <Row>
  <Col className="textopBtnCol1"><Button variant="outline-light">GET STARTED</Button></Col>
  <Col className="textopBtnCol2">
    <Button onClick={this.handleShow} variant="light">WATCH TRAILER <i class="far fa-play-circle"></i></Button> 
</Col>

 </Row>
 </Container>

</div>


<Modal show={this.state.show} onHide={this.handleClose}>

        <Modal.Body>
        <Player       poster={videoposter}
>

      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
      <BigPlayButton position="center" />
    
  <span className="visually-hidden">Loading...</span>
    </Player>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
 
        </Modal.Footer>
      </Modal>


  </Fragment>
  )
 }
}
export default Banner;