import React, { useState } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { FaMoon, FaSun } from 'react-icons/fa';
import './NavBar.css';
import { Projector } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import setMode from '../../store/Actions/setMode';
import setLogin from '../../store/Actions/setLogin';
import { useNavigate } from 'react-router-dom';


function NavBar() {
  const login = useSelector((state) => { return state.login.isLogin })
  const dispatch = useDispatch()
  const mode = useSelector((state) => { return state.mode.mode })
  const savedUser = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate()
  const [query, setQuery] = useState("");
  console.log(login);
  const handleSignOut = () => {

    dispatch(setLogin(false));
    localStorage.removeItem("userData");
    localStorage.setItem("isLoggedIn", "false");
    navigate('/login')
  };
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
              {login && (
                <>
                  <Nav.Link className='link' href="/all">Movies</Nav.Link>
                  <Nav.Link className='link' href="/fav">Favourite Movies</Nav.Link>

                </>)}
              <Nav.Link className='link' href="/contact">Contact</Nav.Link>
            </Nav>

            <Nav className='mx-auto d-flex justify-content-between fs-6 fw-bold'>
              {login && (
                <Form
                  className="d-flex m-1"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (query.trim() === "") return; 
                    navigate(`/search/${query}`); 
                    setQuery(""); 
                  }}
                >
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <Button variant="outline-success" type="submit">
                    Search
                  </Button>
                </Form>
              )}

              <Button className='btn btn-secondary m-1'
                onClick={() => { mode === "dark" ? dispatch(setMode("light")) : dispatch(setMode("dark")) }}
              >
                {mode === "dark" ? <FaSun color="orange" /> : <FaMoon color="white" />}
              </Button>
            </Nav>
            {!login && (
              <Nav>
                <Nav.Link className='fs-7 fw-bold link' href="/register">Register</Nav.Link>
                <Nav.Link className='fs-7 fw-bold link' href="/login">Login</Nav.Link>
              </Nav>

            )}
            {login && (
              <Nav className={mode === "dark"?"text-light":"text-black"}>
                <><h5 style={{ fontFamily: "Merriweather, serif",
    fontOpticalSizing: "auto",
    fontWeight: 900,
    fontStyle: "normal"}} className='mx-3'>Hello ,{savedUser.fname}</h5></>
              </Nav>
            )}
            {login && (
              <Button variant='outline-danger' onClick={handleSignOut}>
                Sign Out
              </Button>
            )}


          </Navbar.Collapse>
        </Container>
      </Navbar >

    </>
  );
}

export default NavBar