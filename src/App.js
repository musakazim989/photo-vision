import Gallery from "./components/Gallery"
import { Routes, Route, Link } from "react-router-dom"
import Signin from "./components/auth/Signin"
import SignUp from "./components/auth/Signup"
import Home from "./components/Home"
import { Navbar, Container, Nav, Card, NavDropdown } from "react-bootstrap"
function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Photo Vision</Navbar.Brand>
          <Nav className="justify-content-end">
            <div>
              <Link to="/">Home</Link>

              <Link to="/signup">Sign Up</Link>
            </div>

            <NavDropdown
              title={
                <Card.Img
                  className="user-img"
                  src="images/user/user1.jpg
              "
                />
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
