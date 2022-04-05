import React from "react";
import { Card } from "react-bootstrap";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = ({ userReview }) => {
  const { img, name, review, retting } = userReview;
  return (
    <Card className="text-start">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <b>Retting: </b>
          <Rating
            initialRating={retting}
            emptySymbol={<FontAwesomeIcon icon={faStar} />}
            fullSymbol={
              <FontAwesomeIcon style={{ color: "red" }} icon={faStar} />
            }
            readonly
          ></Rating>
        </Card.Text>
        <Card.Text>{review.slice(0, 150)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cart;
