import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import imgsrc from "../img/search-24px (2).svg";
const Header = (props) => {
  return (
    <Container>
      <header>
        <span>Project Access</span>
        <input
          type="text"
          placeholder="Type to filter the table"
          onChange={props.handleSearch}
        />
        <img src={imgsrc} />
      </header>
    </Container>
  );
};

export default Header;
