import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components'


const Styles = styled.div`
.navbar {
    background-color: lightgray;
}

.navbar-brand, .navbar-nav, .navbar-link {
    color: black;

    }
}
`;


export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">iZone</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar=nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/loginform">Log In</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/signupform">Sign Up</Nav.Link></Nav.Item>
                </Nav>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)

export default NavigationBar