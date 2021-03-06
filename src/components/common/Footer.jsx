import React from 'react';
import { Grid, Nav, NavItem } from 'react-bootstrap';

const Footer = (/*props*/) => {
  return (
    <footer>
      <Grid>
        <Nav justified>
          <NavItem
            eventKey={1}>
            Privacy policy
          </NavItem>
          <NavItem
            eventKey={2}
            title="Item">
            Terms & Conditions
          </NavItem>
          <NavItem
            eventKey={3}>
            Some other professional link
          </NavItem>
        </Nav>
      </Grid>
    </footer>
  );
}

export default Footer;