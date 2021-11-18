import React, { Component, Fragment } from 'react'
import { Container,Col, Row ,Card,Button} from 'react-bootstrap'
import image1 from './Images/img-2.jpg'
import image2 from './Images/img-3.jpg'
import image3 from './Images/img-4.jpg'
import image4 from './Images/img-8.jpg'
import image5 from './Images/img-9.jpg'

 class CardSec extends Component {
 render() {
  return (
   <Fragment>
    <Container className=" mt-5">
     <Row>
      <Col lg={6} md={12} sm={12}>
      <Card >
  <Card.Img  className="cardImage" variant="top" src={image5} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button className="Cardlevel" variant="primary">Adventure</Button>
  </Card.Body>
</Card>
      </Col>
      <Col lg={6} md={12} sm={12}>
      <Card >
  <Card.Img className="cardImage" variant="top" src={image1} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button className="Cardlevel" variant="primary">Luxury</Button>
  </Card.Body>
</Card>
      </Col>

     </Row>
    </Container>
    <Container className=" mt-3">
     <Row>
      <Col className="cardImage1Col" lg={4} md={12} sm={12}>
      <Card >
  <Card.Img className="cardImage1" variant="top" src={image2} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button className="Cardlevel1" variant="primary">Mystery</Button>
  </Card.Body>
</Card>
      </Col>
      
      <Col className="cardImage1Col" lg={4} md={12} sm={12}>
      <Card >
  <Card.Img className="cardImage1" variant="top" src={image3} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button className="Cardlevel1" variant="primary">Adventure</Button>
  </Card.Body>
</Card>
      </Col>
      <Col className="cardImage1Col" lg={4} md={12} sm={12}>
      <Card >
  <Card.Img className="cardImage1" variant="top" src={image4} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button className="Cardlevel1" variant="primary">Adreneline</Button>
  </Card.Body>
</Card>
      </Col>
     </Row>
    </Container>
   </Fragment>
  )
 }
}
export default CardSec;