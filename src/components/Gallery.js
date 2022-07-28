import {
  getDownloadURL,
  uploadBytes,
  uploadBytesResumable,
  ref,
} from "firebase/storage"
import React, { useContext, Dispatch, useState } from "react"
import {
  Navbar,
  Container,
  Nav,
  Row,
  Col,
  Button,
  Card,
  NavDropdown,
  Alert,
  ProgressBar,
} from "react-bootstrap"
import { storage } from "../Config"


const Gallery = () => {
  const [uploadWarning, setuploadWarning] = useState("")
  const [uploadProgress, setuploadProgress] = useState("")
  const [errImage, setErrimage] = useState("")
  const [upimage, setUpimage] = useState("")

  let uploadSubmit = () => {
    if (upimage) {
      let storageRef = ref(storage, `files/${upimage.name}`)
      let uploadtask = uploadBytesResumable(storageRef, upimage)

      uploadtask.on(
        "state_changed",
        (snapshot) => {
          let progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          )
          setuploadProgress(progress)
        },
        (err) => {
          setErrimage(err)
        },
        () => {
          getDownloadURL(uploadtask.snapshot.ref).then((url) => {
            console.log(url)
          })
        }
      )
    } else {
      setuploadWarning("No image")
    }
  }

  return (
    <>
      <Container>
        <Row>
          <Col lg={4} className="mt-5">
            <div className="mt-5 ms-1">
              <input
                onChange={(e) => setUpimage(e.target.files[0])}
                className="form-control"
                type="file"
                id="formFile"
              ></input>
              {upimage ? (
                ""
              ) : (
                <Alert className="mt-3" variant={"danger"}>
                  {uploadWarning}
                </Alert>
              )}
            </div>
          </Col>
          <Col lg={2} className="mt-5">
            <Button onClick={uploadSubmit} variant="primary" className="mt-5">
              Upload
            </Button>
          </Col>
        </Row>

        <Row className="mt-5 mb-4">
          <Card className="my-card ms-3 me-3 " style={{ width: "18rem" }}>
            <Card.Img variant="top" src="images/gallery/gal1.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="danger">Delete</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  )
}

export default Gallery
