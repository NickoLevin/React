import {Button} from 'react-bootstrap'
import React, { Component } from 'react'
import { Container, Navbar, Nav,Form, NavLink, FormControl, mr } from 'react-bootstrap'
import logo from './logo192.png'
export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" >
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                            src={logo}
                            width='30'
                            height='30'
                            className="d-inline-block align-top"
                            alt="logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/About">About us</Nav.Link>
                                <Nav.Link href="/Contacts">Contacts</Nav.Link>
                                <Nav.Link href="/Blog">Blog</Nav.Link>
                            </Nav>
                            <Form inline >
                                <FormControl 
                                    type='text'
                                    placeholder='Search'
                                    className='mr-sm-2'
                                />
                                <Button variant="outline-info">Search</Button>
                            </Form >
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
