import { Routes, Route, Link, useNavigate } from "react-router-dom"
import Gallery from "./components/Gallery"
import Signin from "./components/auth/Signin"
import SignUp from "./components/auth/Signup"
import Home from "./components/Home"
import { Navbar, Container, Nav, Card, NavDropdown } from "react-bootstrap"
import { getAuth, signOut } from "firebase/auth"
function App() {
  const navigate = useNavigate()
  let handleSignOut = () => {
    const auth = getAuth()
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      .catch((error) => {
        // An error happened.
      })
  }

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
              <NavDropdown.Item onClick={handleSignOut}>
                Sign out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="gallery" element={<Gallery />} />
      </Routes>
    </>
  )
}

export default App
