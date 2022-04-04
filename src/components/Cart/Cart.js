import React from "react";
import { Card } from "react-bootstrap";

const Cart = ({ userReview }) => {
  //   const userReview = userReview.slice(0, 3);
  const { img, name, review } = userReview;
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{review.slice(0, 100)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cart;
