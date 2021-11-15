import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Drawer from "../Drawer/Drawer";

const MakeAdmin = () => {
  const [success, setSuccess] = useState(false);
  const [admin, setAdmin] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newAdminData = { ...admin };
    newAdminData[field] = value;
    setAdmin(newAdminData);

  };

  const handleAdmin = (e) => {
    fetch("https://intense-crag-53623.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(admin),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert('successfull');
        }

      })
      e.preventDefault();
  };
  return (
    <div className='container'>
      <Navigation></Navigation>
      <div className="row justify-content-between ">
        <Drawer></Drawer>
        <div className="col-8 p-4 bg-dark rounded-3">
        <div style={{ minHeight: "70vh" }}>
          {success && alert("New Admin Successfylly Created...")}
          <Form onSubmit={handleAdmin} style={{ maxWidth: "450px" }}>
            <Form.Label>Email address to make admin</Form.Label>
            <Form.Control
              required
              className="mb-5"
              type="email"
              name="email"
              onBlur={handleOnBlur}
              placeholder="Enter email"
            />
            <Button  variant="warning" type="submit">
              Make Admin
            </Button>
          </Form>
        </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MakeAdmin;
