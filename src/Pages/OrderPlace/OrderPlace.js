import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/UseAuth";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import './OrderPlace.css'

const OrderPlace = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState({});
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(`https://calm-fjord-54492.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBooking(data)
      });
  }, [id]);

  // reset from after fetching data
  useEffect(() => {
    reset();
  }, [booking]);

  const onSubmit = (data) => {
    fetch("https://calm-fjord-54492.herokuapp.com/placeOrders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({...data, status: 'Pending'}),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          alert("order processed successfully");
          reset();
        }
      });
  };

  return (
    <div className="container">
      <h2>This is Order Place name {booking.name}</h2>
      {/* <h2>this is booking {id}</h2> */}

      <Card className="w-50 mx-auto my-5">
        <Card.Img className="p-4" variant="top" src={booking?.img} />
        <Card.Body>
          <Card.Title>Country Name: {booking?.name}</Card.Title>
          <Card.Text>
            {booking?.description?.slice(0,200)}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Offer: {booking.offer}</ListGroupItem>
          <ListGroupItem>Price: {booking?.price}$</ListGroupItem>
        </ListGroup>
      </Card>
      
       <div>
         <h3 className="my-3">Type Your phone Number than order proceed</h3>
       </div>

      <div className="order-style">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue={user.displayName} {...register("name")} />

          <input
            defaultValue={booking.name}
            {...register("place", { required: true })}
          />
          {errors.email && (
            <span className="error">This field is required</span>
          )}
          <input
            defaultValue={booking?.price}
            {...register("price", { required: true })}
            placeholder="price"
          />
          <input
            defaultValue={user.email}
            {...register("email")}
            placeholder="email"
          />
          <input
            defaultValue=""
            {...register("phone")}
            placeholder="phone number"
            required
          />
          <input className="bg-danger" type="submit" value="submit" />
          {/* <button className="bg-danger" type="submit">add</button> */}
        </form>
      </div>
    </div>
  );
};

export default OrderPlace;
