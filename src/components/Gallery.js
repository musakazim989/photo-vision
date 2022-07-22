import React from "react"
import { Navbar, Container, Nav, Row, Col, Button, Card } from "react-bootstrap"

const Gallery = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Photo Vision</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col lg={8}>
            <div className="mt-5">
              <label for="formFile" class="form-label">
                Default file input example
              </label>
              <input class="form-control" type="file" id="formFile"></input>
              <Button variant="primary" className="mt-3">
                Go somewhere
              </Button>
            </div>
          </Col>
          <Col lg={4}>
            <Card style={{ width: "8rem" }}>
              <Card.Img
                className="user-img"
                variant="top"
                src="images/user/user1.jpg
              "
              />
            </Card>
            <Button variant="primary" className="mt-3">
              Go somewhere
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Gallery
