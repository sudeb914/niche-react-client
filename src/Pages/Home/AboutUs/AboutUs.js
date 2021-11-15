import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div id="testimonial" className="my-4 ">
      <h2 className="my-3 text-center fw-bold  ">Testimonial</h2>
      <Container>
        <Row>
          <Col md="6" sm="12">
            <h2>Our Reputation Speaks</h2>
            <h1 className="text-warning border-3 border-bottom">for Itself</h1>
            <div>
              <p>
                We are proud to have served our clients well. We believe that
                the best way for you to learn more about us is to have our
                <br />
                <br />
                customers tell you themselves. We excel at providing superior
                and innovative technology and unsurpassed technical support. Our
                <br />
                <br />
                commitment to excellence is shown in the testimonials below. If
                you have any questions please feel free to contact us anytime.
              </p>
             
            </div>
          </Col>
          <Col md="6" sm="12">
            <div className="text-center">
            <img
              className="img-fluid"
              src="http://www.cctvservices.net/wp-content/uploads/2016/05/CCTV-Services-100-Percent-Satisfaction-Guaranteed.png"
              alt=""
            />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
