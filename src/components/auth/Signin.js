import React, { useState } from "react"
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  console.log(password)

  const navigate = useNavigate()

  let handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Container>
        <Row style={{ display: "flex", alignItems: "center", height: "100vh" }}>
          <Col lg={4}></Col>
          <Col lg={4}>
            <Card
              style={{
                textAlign: "center",
                padding: "10px",
                marginBottom: "15px",
              }}
            >
              <h1 style={{ color: "#dc3545" }}>Sign In</h1>
            </Card>
            <Card>
              <Form className="mx-3 my-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                  />
                </Form.Group>

                <Button
                  onClick={handleSubmit}
                  variant="danger"
                  type="submit"
                  style={{ width: "100%", marginBottom: "10px" }}
                >
                  Submit
                </Button>
                <p>
                  Don't have an accoutn? <Link to="/signup">Sign Up</Link>
                </p>
              </Form>
            </Card>
          </Col>
          <Col lg={4}></Col>
        </Row>
      </Container>
    </>
  )
}

export default Login
