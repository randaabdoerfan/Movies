import React from 'react'
import { Button, Container, Form, Nav, Navbar} from 'react-bootstrap';
import { FaMoon, FaSun } from 'react-icons/fa';
import './NavBar.css';
import { Projector } from 'lucide-react';


function NavBar({ mode, setMode }) {
  return (

    <>
      <Navbar expand="lg" bg={mode === "dark" ? "dark" : "light"}
        variant={mode === "dark" ? "dark" : "light"} className='border-bottom'>
        <Container>
          <Navbar.Brand href="/home" className='fs-7 fw-bold'><Projector /> Popular Movies</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="mx-auto d-flex justify-content-between fs-7 fw-bold" >
              <Nav.Link className='link' href="/">Home</Nav.Link>
              <Nav.Link className='link'  href="/all">Movies</Nav.Link>
              <Nav.Link className='link' href="/fav">Favourite Movies</Nav.Link>
              <Nav.Link className='link' href="/contact">Contact</Nav.Link>
            </Nav>
            <Nav className='mx-auto d-flex justify-content-between fs-6 fw-bold'>
            <Form className="d-flex m-1">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>

            <Button className='btn btn-secondary m-1'
              onClick={() => { mode === "dark" ? setMode("light") : setMode("dark") }}
            >
              {mode === "dark" ? <FaSun color="orange" /> : <FaMoon color="white" />}
            </Button>
            </Nav>
            <Nav>
              <Nav.Link className='fs-7 fw-bold link' href="/register">Register</Nav.Link>
              <Nav.Link className='fs-7 fw-bold link' href="/login">Login</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar >

    </>
  );
}

export default NavBar