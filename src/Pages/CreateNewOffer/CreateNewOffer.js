import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./CreateOffer.css";

const CreateNewOffer = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("https://calm-fjord-54492.herokuapp.com/services", data).then((res) => {
      if (res.data.insertedId) {
        alert("Offer Added successfully");
        reset();
      }
    });
  };

  return (
   <div className="background-color container my-5">
      <h2 className="mt-3-2 text-color">Create New Offer</h2>
      <div className="add-offer p-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true })} placeholder="name" required/>
        <input {...register("description")} placeholder="description" required />
        <input type="number" {...register("price",)} placeholder="price" required />
        <input {...register("offer")} placeholder="offer" required/>
        <input {...register("img")} placeholder="img_url" required/>
        <input className="btn-color" type="submit" />
      </form>
    </div>
   </div>
  );
};

export default CreateNewOffer;
