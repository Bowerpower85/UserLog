import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './style.css';


function Header() {
    return (
        <header className="header">
            <Container>
                <Navbar className="justify-content-center">
                    <Nav>
                        <Nav><h1 className="text-center text-color">Rock N Roll Directory</h1></Nav>
                    </Nav>
                </Navbar>
            </Container>
        </header>
    )
}


export default Header;