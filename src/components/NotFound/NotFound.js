import React from "react";
import { Container } from "react-bootstrap";
import notFoundImg from "../../Images/NotFun.jpg";
const NotFound = () => {
  return (
    <Container fluid className="p-0">
      <img src={notFoundImg} class="img-fluid" alt="..."></img>
    </Container>
  );
};

export default NotFound;
