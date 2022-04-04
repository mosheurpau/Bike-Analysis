import React from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import bike from "../../Images/bike-bg.png";
import "./Home.css";
import useReview from "../../hooks/userReview";
import Cart from "../Cart/Cart";

const Home = () => {
  const [userReviews, setuserReviews] = useReview();
  return (
    <Container fluid>
      <Row className="banner-bg">
        <Col sm={5} className="banner-text">
          <h1 className="bike-name">NINJA H2®R</h1>
          <h1>BUILT BEYOND BELIEF</h1>
          <p>
            Surrounding the Ninja H2®R motorcycle’s high-output engine is a
            multitude of premium, high-performance components, selected
            specifically for unmatchable performance at track speeds.
          </p>
          <button>Live demo</button>
        </Col>
        <Col sm={7} className="banner-img">
          <img src={bike} alt=""></img>
        </Col>
      </Row>
      <div>
        <h2 className="customer-review">Customer Reviews(3)</h2>

        <div className="reviews-container">
          {userReviews.map((userReview) => (
            <Cart key={userReview.id} userReview={userReview}></Cart>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Home;
