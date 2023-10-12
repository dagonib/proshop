import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

// Actions
import { logout } from '../actions/userActions';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropDown from 'react-bootstrap/NavDropDown';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const dispatch = useDispatch();

  // Obtener los datos del usuario logueado del estado global.
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Proshop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FontAwesomeIcon
                    className="pe-2"
                    icon={faCartShopping}
                    size="xs"
                  />
                  Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropDown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropDown.Item>Profile</NavDropDown.Item>
                  </LinkContainer>
                  <NavDropDown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropDown.Item>
                </NavDropDown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <FontAwesomeIcon className="pe-2" icon={faUser} size="xs" />
                    Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
