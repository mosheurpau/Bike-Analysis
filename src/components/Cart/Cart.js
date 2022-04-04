import React from "react";
import { Card } from "react-bootstrap";

const Cart = ({ userReview }) => {
  const { img, name, review } = userReview;
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{review.slice(0, 150)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cart;
