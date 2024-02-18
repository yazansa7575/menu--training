import {useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";

function NavBar({ filterbysearch }) {

  const [inputValue,setinputValue] =useState("")

  return (
    <Navbar bg="dark" expand="lg" variant="dark"  >
      <Container style={{ padding: "0%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Navbar.Brand className="logoImageFather" ><img className="logoImage" src="logo.png" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{ justifyContent: " end" }}>
          <Form className="d-flex mt-2">
            <Form.Control
              type="text"
              placeholder="أبحث عن .."
              className="mx-2 "
              onChange={(e)=>setinputValue(e.target.value)}
              value={inputValue }
            />
            <Button variant="success" onClick={() => {filterbysearch(inputValue);setinputValue("")}}>أبحث</Button>
          </Form>
        </Navbar.Collapse>

      </Container>
    </Navbar>


  );
}

export default NavBar;
