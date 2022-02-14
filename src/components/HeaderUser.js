import React from "react";
import { Container } from "react-bootstrap";
const HeaderUser = ({ name }) => {
  return (
    <Container>
      <header>
        <span>{name}</span>
      </header>
    </Container>
  );
};

export default HeaderUser;
