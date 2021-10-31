import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './MainOffer.css'

const MainOffer = () => {
  const [offer, setOffer] = useState();

  useEffect(() => {
    fetch("https://calm-fjord-54492.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setOffer(data));
  }, []);

  return (
    <div className="container">
      <h1 className="mt-3 text-danger">~~~Our 11.11 is offer is coming soon~~~</h1>
      <br />
      <br />
     

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mainOffer-style">
        {offer?.map((offers) => (
          <div key={offers._id} className="p-3">
            <div className="col ">
              <div className="card mx-auto">
                <img src={offers?.img} className="card-img-top p-3" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{offers.name}</h5>
                  <p className="card-text">{offers.description.slice(0,100)}</p>

                  <h3>{offers.offer}</h3>
                  <h3> Price: ${offers.price}</h3>

                  <Link to={`/orderPlace/${offers?._id}`}>
                    <Button variant="info">Book Now</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainOffer;
