import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";


function Header() {

  let NavSpan = styled.span`
  display: block;
  padding: .5rem 1rem;
  text-decoration: none;
  background-color: transparent;
  list-style: none;
  padding-left: 0;
  color: rgba(0,0,0,.5);
  `

  return (
    <div id="GNB">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Lights on</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to = "/">
            <NavSpan>Home</NavSpan>
            </Link>

            <Link to = "/shop">
            <NavSpan>
              Store
              </NavSpan>
            </Link>


            <Nav.Link href="#action3" disabled>
              Experience
            </Nav.Link>
            <Nav.Link href="#action4" disabled>
              Login
            </Nav.Link>
          </Nav>
        
          
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
