import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <CustomLink className="ms-2" to="/">MealDB</CustomLink>
                    <Nav className="ms-auto d-flex align-items-center">
                        <CustomLink className="ms-2 " to="/restaurant">Restaurant</CustomLink>
                        <CustomLink className="ms-2 " to="/aboutUs">About Us</CustomLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;