import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = (props) => {
  return (
    <Navbar fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">
            Counter App
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem
            eventKey={1}
            href="#">
            Home
          </NavItem>
          <NavItem
            eventKey={2}
            href="#">
            Other
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}


export default Header;