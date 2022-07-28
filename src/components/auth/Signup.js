import React, { useState } from "react"
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword } from "../../Config"

const SignUp = () => {
  let navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  let handleSubmit = (e) => {
    e.preventDefault()

    const auth = getAuth()

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)

        navigate("/signin")
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorMessage)
        console.log(errorCode)
        // ..
      })
  }

  //  createUserWithEmailAndPassword(email, password)
  // .then(function(result) {
  //   return result.user.updateProfile({
  //     displayName: document.getElementById("name").value
  //   })
  // }).catch(function(error) {
  //   console.log(error);
  // });

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
              <h1 style={{ color: "#dc3545" }}>Sign Up</h1>
            </Card>
            <Card>
              <Form className="mx-3 my-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
                  />
                </Form.Group>

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

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) => {
                      setConfirmPassword(e.target.value)
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
                  Alredy have an accoutn? <Link to="/signin">Sign In</Link>
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

export default SignUp
