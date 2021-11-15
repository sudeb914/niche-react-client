import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Drawer from "../Drawer/Drawer";

const AddReview = () => {
  const { user } = useAuth();
  const [success, setSuccess] = useState(false);
  const [rating, setRating] = useState({
    info: "",
    name: user.displayName,
    email: user.email,
    img: user.photoURL,
  });

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRating = { ...rating };
    newRating[field] = value;
    setRating(newRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://intense-crag-53623.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(rating),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess(true);
        }
      });
  };

  return (
    <div className="container">
      <Navigation></Navigation>
      <div className="row justify-content-between">
        <Drawer></Drawer>

        <div className="col-8  bg-dark rounded-3 p-4 text-dark">
          <div>
            <Form
              onSubmit={handleSubmit}
              style={{ maxWidth: "450px" }}
              className="m-auto"
            >
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Say Something</Form.Label>
                <Form.Control
                  required
                  onBlur={handleOnBlur}
                  name="info"
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  onBlur={handleOnBlur}
                  type="Text"
                  name="name"
                  placeholder="Enter Name"
                  value={user.displayName}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  onBlur={handleOnBlur}
                  type="Text"
                  email="email"
                  placeholder="Enter email"
                  value={user.email}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            {success && (
              <Alert variant="primary">Review Successfylly Added...</Alert>
            )}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddReview;
