import React from "react";
import "./footer.css";
import Navbar from "react-bootstrap/Navbar";
import { faLeaf } from "@fortawesome/free-solid-svg-icons/faLeaf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import card1 from "../pics/card1.png";
import card2 from "../pics/card2.png";
import card3 from "../pics/card3.png";
import card4 from "../pics/card4.png";
import '../Components/responsive.css'

const Footer = () => {
  return (
    <>
      <div className="pd-y container">
        <div className="footer-section row">
          <div className="col-lg-5 one-footer">
            <Navbar.Brand href="/" className="logo-txt">
              <FontAwesomeIcon icon={faLeaf} className="leaf" /> PLANTEX
            </Navbar.Brand>

            <h6 className="footer-desc">
              Subscribe to our newsletter to stay update{" "}
            </h6>

            <Form.Group
              className="mb-3 group"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="email-txt"
              />
              <Button
                variant="primary"
                type="submit"
                className="last-subscribe"
              >
                Subscribe
              </Button>
            </Form.Group>
          </div>
           
          <div className="col-2  two-footer">
            <h6> Our Address</h6>
            <ul className="footer-ul">
              <li>ِAmirca</li>
              <li>New Work</li>
              <li>+2674592443</li>
            </ul>
          </div>

          <div className="col-2 three-footer ">
            <h6>Contact Us</h6>
            <ul className="footer-ul">
              <li>+2674592443</li>
              <div className="apps-icons">
                <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className="brand" />
                </Link>
                <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="brand" />
                </Link>
                <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} className="brand" />
                </Link>
              </div>
            </ul>
          </div>

          <div className="col-3 four-footer">
            <p>We accept all credit cards</p>
            <ul className="cards-ul">
              <Link>
                <img src={card1} alt="card1" className="card1"/>
              </Link>

              <Link>
                <img src={card2} alt="card2" className="card1" />
              </Link>

              <Link>
                <img src={card3} alt="card3" className="card1" />
              </Link>

              <Link>
                <img src={card4} alt="card4"  className="card1" />
              </Link>
            </ul>
          </div>

          <span className="raneem">© Raneem Moawad. All rigths reserved</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
