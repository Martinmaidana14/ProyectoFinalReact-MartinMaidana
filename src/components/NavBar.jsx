
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { CartWidget } from "./CartWidget";
export const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand to="/" as={NavLink} >
                    eCommerce! 📲
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link to="/category/celulares" as={NavLink} >
                        Celulares
                    </Nav.Link>
                    <Nav.Link to="/category/tablets" as={NavLink} >
                        Tablets
                    </Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    );
};







/*Definicion de componente
export const Input = () => {
    return <input type="number" />
};
*/