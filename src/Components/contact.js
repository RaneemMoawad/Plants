import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import '../Components/responsive.css'

const Contact = () => {
  return (
    <>
      <div className=" container">
        <div className="contact-section row" id="contact">
          <div className="last-left col-lg-6  " data-aos="zoom-in-right">
            <h2>
              Reach out to us today
              <br /> via any of the given
              <br /> information{" "}
            </h2>
            <div className="call-us">
              <span>Call us for instant support</span>
              <p>
                {" "}
                <FontAwesomeIcon icon={faPhone} className="phone-icon" />
                +2674592443
              </p>
            </div>
            <div className="write">
              <span>Write us by mail</span>
              <p>
                <FontAwesomeIcon icon={faMailBulk} className="mail-icon" />
                user@email.com
              </p>
            </div>
          </div>
          <Form className="last-right col-lg-6 "  data-aos="zoom-in-left">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="Email" className="form-email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="Subject" className="form-email" />
            </Form.Group>
            <Form.Group
              className="mb-3 message-txt"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit" className="sub">
            Submit
          </Button>
          </Form>

          
        </div>
      </div>
    </>
  );
};

export default Contact;
