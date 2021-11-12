import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/logo_3.png';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" className="header_bgColor py-3" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link to="/home"><img src={logo} width="50px" alt="" /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto anchor">

                            <Link to="/home">Home</Link>
                            <Link to="/explore">Explore</Link>
                            {/* <Link to="/dashboard">Dashboard</Link> */}
                            <Link to="/about">About</Link>

                        </Nav>
                        <Nav>
                            <Nav.Link className="text-white" href="#deets">{user.displayName}</Nav.Link>
                            {user?.email ?
                                <div>
                                    <Link className="text-white m-2" eventKey={2} to="/dashboard">
                                        <button type="button" class="btn btn-outline-info">Dashboard</button>
                                    </Link>

                                    <button onClick={logout} type="button" class="btn btn-outline-info">Log out</button>
                                </div>
                                :
                                <Link className="text-white" eventKey={2} to="/login">
                                    <button type="button" class="btn btn-outline-info">Login</button>
                                </Link>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;