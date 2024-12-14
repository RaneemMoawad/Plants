import React from "react";
import "./products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import product1 from "../pics/product1.png";
import product2 from "../pics/product2.png";
import product3 from "../pics/product3.png";
import product4 from "../pics/product4.png";
import product5 from "../pics/product5.png";
import product6 from "../pics/product6.png";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import '../Components/responsive.css'


const Products = () => {
  return (
    <>
      <div className="container pd-y">
        <div className="products-section "  id="products">
          <span className="products-title" data-aos="zoom-in-up">
            Steps to start your
            <br /> plants off right
          </span>
          <ul className="cards " data-aos="zoom-in-up">
            <li className="block">
              <span className="card-num">01</span>
              <h6 className="card-title">Choose Plant</h6>
              <p className="card-p">
                Once your order is set, we move to the next step which is the
                shipping.
              </p>
            </li>
            <li className="block">
              <span className="card-num">02</span>
              <h6 className="card-title">Place an order</h6>
              <p className="card-p">
                Once your order is set, we move to the next step which is the
                shipping.
              </p>
            </li>
            <li className="block">
              <span className="card-num">03</span>
              <h6 className="card-title">Get plants delivered </h6>
              <p className="card-p">
                Once your order is set, we move to the next step which is the
                shipping.
              </p>
            </li>
          </ul>
        </div>

        <div className="sec-products-title pd-y  block">
          <span className="products-title">
            Check out our
            <br /> products
          </span>

          <p className="sec-p">
            Here are some selected plants from our showroom,
            <br /> all are in excellent shape and
            <br /> has a long life span. Buy and enjoy best quality.
          </p>

          <div className="plants">
            <ul className="frist-row-plants ">
              <li data-aos="zoom-out-right">
              <div className="backoka">
                <img src={product1} alt="product1" className="product" />
                <span className="product-circle"></span>
                </div>                <div className="img-desc">
                  <h6>Cacti Plant</h6>
                  <div className="price-buy">
                    <span>$19.99</span>
                    <Button className="shopping-btn"><FontAwesomeIcon icon={faShoppingBag} className="shopping-bag"/></Button>
                  </div>
                </div>
              </li>
              <li data-aos="zoom-out-up">
              <div className="backoka">
                <img src={product2} alt="product2" className="product" />
                <span className="product-circle"></span>
                </div>                <div className="img-desc">
                  <h6>Cactus Plant</h6>
                  <div className="price-buy">
                    <span>$11.99</span>
                    <Button className="shopping-btn"><FontAwesomeIcon icon={faShoppingBag} className="shopping-bag"/></Button>
                  </div>
                </div>
              </li>
              <li data-aos="zoom-out-left">
              <div className="backoka">
                <img src={product3} alt="product3" className="product" />
                <span className="product-circle"></span>
                </div>                <div className="img-desc">
                  <h6>Aloe Vera Plant</h6>
                  <div className="price-buy">
                    <span>$7.99</span>
                    <Button className="shopping-btn"><FontAwesomeIcon icon={faShoppingBag} className="shopping-bag"/></Button>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="sec-row-plants block">
              <li data-aos="zoom-out-right">
              <div className="backoka">
                <img src={product4} alt="product4" className="product" />
                <span className="product-circle"></span>
                </div>                <div className="img-desc">
                  <h6>Succulent Plant</h6>
                  <div className="price-buy">
                    <span>$5.99</span>
                    <Button className="shopping-btn"><FontAwesomeIcon icon={faShoppingBag} className="shopping-bag"/></Button>
                  </div>
                </div>
              </li>
              <li data-aos="zoom-out-up" >
              <div className="backoka">
                <img src={product5} alt="product5" className="product" />
                <span className="product-circle"></span>
                </div>                <div className="img-desc">
                  <h6>Succulent Plant</h6>
                  <div className="price-buy">
                    <span>$10.99</span>
                    <Button className="shopping-btn"><FontAwesomeIcon icon={faShoppingBag} className="shopping-bag"/></Button>
                  </div>
                </div>
              </li>
              <li data-aos="zoom-out-right">
                <div className="backoka">
                <img src={product6} alt="product6" className="product" />
                <span className="product-circle"></span>
                </div>
                <div className="img-desc">
                  <h6>Green Plant</h6>
                  <div className="price-buy">
                    <span>$8.99</span>
                    <Button className="shopping-btn"><FontAwesomeIcon icon={faShoppingBag} className="shopping-bag"/></Button>
                    
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Products;
