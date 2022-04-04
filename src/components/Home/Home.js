import React from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import bike from "../../Images/bikeBg.png";
import "./Home.css";
import useReview from "../../hooks/userReview";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";

const Home = () => {
  const [userReviews, setuserReviews] = useReview();
  return (
    <Container fluid>
      <Row className="banner-bg">
        <Col sm={5} className="banner-text">
          <h1 className="bike-name">KAWASAKI NINJA H2®R</h1>
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
      <div className="customer-review">
        <h2 className="review-title">Customer Reviews(3)</h2>

        <div className="reviews-container">
          {userReviews.slice(0, 3).map((userReview) => (
            <Cart key={userReview.id} userReview={userReview}></Cart>
          ))}
        </div>
      </div>
      <div className="see-all-review">
        <Link className="see-all-btn" to="/revews">
          See All Reviews
        </Link>
      </div>
    </Container>
  );
};

export default Home;
