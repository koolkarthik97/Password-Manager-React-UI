import React, { Component } from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import "../Images/home_lock.jpg";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdbreact";
class Welcome extends Component {
  state = {};
  render() {
    let navbar_tag = (
      <Navbar
        bg="dark"
        variant="dark"
        style={{ paddingLeft: "10%", paddingTop: "1%", paddingBottom: "1%" }}
      >
        <Navbar.Brand href="#home">Password Manager</Navbar.Brand>
        <Form inline style={{ marginLeft: "40%" }}>
          <FormControl type="text" placeholder="Username" className="mr-sm-2" />
          <FormControl
            type="password"
            placeholder="Password"
            className="mr-sm-2"
          />
          <Button variant="outline-primary">Login</Button>
        </Form>
      </Navbar>
    );
    let form_tag = (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form>
                  <p className="h4 text-center py-4">Sign up</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Your name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Confirm your email"
                      icon="exclamation-triangle"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="cyan" type="submit">
                      Register
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );

    let container_tag = (
      <div
        style={{ display: "flex", flexDirection: "row", paddingLeft: "10%" }}
      >
        <img
          src={require("../Images/home_lock.jpg")}
          height="400dp"
          style={{ marginTop: "8rem", marginLeft: "10rem" }}
        />
        <div style={{ width: "100%", marginRight: "-60%", marginTop: "2rem" }}>
          {form_tag}
        </div>
      </div>
    );
    return (
      <React.Fragment>
        {navbar_tag}
        {container_tag}
      </React.Fragment>
    );
  }
}

export default Welcome;
