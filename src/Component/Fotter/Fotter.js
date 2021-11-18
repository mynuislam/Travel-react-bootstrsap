import React, { Component, Fragment } from 'react'
import { Col, Container, Row,InputGroup,FormControl,Button} from 'react-bootstrap'
 class Fotter extends Component {
 render() {
  return (
   <Fragment>
 <div className="footter">   <Container  >
<Row>
    <Col>
       <h1 className=" text-center NewsletterUpText" >Join the adventure newletter yo recieve our best vacation deals</h1>
       <h2 className=" text-center NewsletterUpText1">you can unsubscribe at any time</h2>
    </Col>
</Row>
<div>

<InputGroup className="mb-3 Newsletter">
<FormControl type="email" placeholder="Enter email" />

    <InputGroup.Append>
    <Button variant="primary">Submit</Button>   
     </InputGroup.Append>
  </InputGroup>

</div>
<div className='BeforelstFotter mt-5'>
<div className="BeforelstFotter1"><h2 className="footterAoutSec">About Us</h2>
<a href='#How it works'>How it works</a><br></br>
<a href='#How it works'>Testimonial</a><br></br>
<a href='#How it works'>Carears</a><br></br>
<a href='#How it works'>Investors</a><br></br>
<a href='#How it works'>Terms of Service</a><br></br></div>
<div className="BeforelstFotter1"><h2 className="footterAoutSec">Contact Us</h2>
<a href='#How it works'>Contact</a><br></br>
<a href='#How it works'>Support</a><br></br>
<a href='#How it works'>Destinations</a><br></br>
<a href='#How it works'>Sponsorships</a><br></br></div>
<div className="BeforelstFotter1"><h2 className="footterAoutSec">Videos</h2>
<a href='#How it works'>Submit Video</a><br></br>
<a href='#How it works'>Ambassadors</a><br></br>
<a href='#How it works'>Agency</a><br></br>
<a href='#How it works'>Influecer</a><br></br></div>
<div className="BeforelstFotter1"><h2 className="footterAoutSec">Social Media</h2>
<a href='#How it works'>Instragram</a><br></br>
<a href='#How it works'>Facebook</a><br></br>
<a href='#How it works'>Youtube</a><br></br>
<a href='#How it works'>Twitter</a><br></br></div>
</div>




<div className='LastFotterDiv mt-5'>
<div className="LastFotterDiv1"><h1 ><a className="LastFooterLogo" href="#TRVL">TRVL <i class="fab fa-typo3"></i> </a></h1></div>
<div  className="LastFotterDiv2"><a href="#Trvl">TRVL &copy; 2020</a></div>
<div className="LastFotterDiv3">
<a href="#Facebook"><i class="fab fa-facebook-f"></i></a>
<a href="#Insta"><i class="fab fa-instagram"></i></a>
<a href="#Youtube"><i class="fab fa-youtube-square"></i></a>
<a href="#Twitter"><i class="fab fa-twitter"></i></a>
</div>

</div>

    </Container>
    
    </div>    

   </Fragment>
  )
 }
}
export default Fotter;