import React from "react";
import About from "../Components/about";
import Products from "../Components/products";
import Faqs from "../Components/faqs";
import Contact from "../Components/contact";
import "./home.css";
import { Link } from "react-router-dom";
import home from "../pics/home.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Button from "react-bootstrap/Button";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import "../Components/responsive.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="home-section  row ">
          <div className="col-lg-5  frist-left " data-aos="fade-down-right">
            <h2>Plants will make your life better</h2>
            <p>
              Create incredible plant design for your offices or apastaments.
              Add fresness to your new ideas.
            </p>
            <Button variant="explore">
              Explore
              <FontAwesomeIcon icon={faChevronCircleRight} className="chevro" />
            </Button>
          </div>
          <div className="col-lg-6  frist-right " data-aos="fade-down-left">
            <img src={home} className="home-img " alt="home-img" />
            <div className="last-frist block">
              <span className="follow-us">follow us</span>
              <h6 className="line"> </h6>
              <ul className="apps">
                <Link>
                  <li>
                    <FontAwesomeIcon icon={faFacebook} />
                  </li>
                </Link>
                <Link>
                  <li>
                    <FontAwesomeIcon icon={faInstagram} />
                  </li>
                </Link>
                <Link>
                  <li>
                    <FontAwesomeIcon icon={faTwitter} />
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <About />
      <Products />
      <Faqs />
      <Contact />
    </>
  );
};

export default Home;
