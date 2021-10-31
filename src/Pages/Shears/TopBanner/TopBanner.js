import React from "react";
import { Carousel } from "react-bootstrap";

const TopBanner = () => {
  return (
    <div className="container">
      <h2 className="my-3 text-info">Sopnomoy Travel Agency</h2>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-75 mx-auto"
            src="https://i.ibb.co/0Q68sL2/anders-jilden-c-Yr-MQA7a3-Wc-unsplash-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>India</h2>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-75 mx-auto"
            src="https://i.ibb.co/kD3qrf7/david-marcu-78-A265w-Pi-O4-unsplash-1.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h2>Spain</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-75 mx-auto"
            src="https://i.ibb.co/8jbmG0b/federico-beccari-ry-C3-SVUe-Rg-Y-unsplash-1.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h2>Thailand</h2>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default TopBanner;
