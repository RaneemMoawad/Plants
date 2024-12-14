import React from "react";
import about from "../pics/about.png";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./about.css";
import '../Components/responsive.css'



const About = () => {
  return (
    <>
    <div className="container">
    <div className="about-section row pd-y" id="about">
        <div className="col-lg-5 sec-left" data-aos="fade-up-right">
          <img src={about} alt="about-img" className="about-img" />
        </div>
        <div className="col-lg-6 sec-right " data-aos="fade-left">
          <h3>Who we really are & why choose us </h3>
          <p>
            We have over 4000+ unbiased reviews and our customers trust our
            plant process and delivery service every time
          </p>
          <ul>
            <li>
              {" "}
              <FontAwesomeIcon icon={faCheck} className="check" />
              We always deliver on time.
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faCheck} className="check" />
              We give you guides to protect and care for your plants.
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faCheck} className="check" />
              We always come over for a check-up after sale.
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faCheck} className="check" />
              100% money back guaranteed.
            </li>
          </ul>
          <Button variant="explore" className="shop-now">
            Shop Now
            <FontAwesomeIcon icon={faChevronCircleRight} className="chevro" />
          </Button>
        </div>
      </div>

    </div>
      
    </>
  );
};
export default About;
