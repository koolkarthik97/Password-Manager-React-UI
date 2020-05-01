import React, { Component } from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
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
    return <React.Fragment>{navbar_tag}</React.Fragment>;
  }
}

export default Welcome;
