import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import useAuth from "../../Hooks/UseAuth";
import "./MyOrder.css";

const MyOrder = () => {
  const { user } = useAuth();
  const [allData, setAllData] = useState();
  useEffect(() => {
    fetch("https://calm-fjord-54492.herokuapp.com/placeOrders")
      .then((res) => res.json())
      .then((data) => {
        const dataFilter = data.filter((mail) => mail?.email == user?.email);
        setAllData(dataFilter);
        console.log(dataFilter);
      });
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`https://calm-fjord-54492.herokuapp.com/placeOrders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("delete complet");
            const totaldata = allData?.filter((da) => da._id !== id);
            setAllData(totaldata);
          }
        });
    }
  };

  //   console.log(allData)
  return (
    <div>
      <h2>This is my order</h2>

      <div className="bg-color-style py-3 container">
        {allData?.map((productData) => (
          <div key={productData?._id}>
            <div className="display-style my-3">
              <div>
                <h3>{productData.name}</h3>
              </div>
              <div>
                <h3>{productData.place}</h3>
              </div>
              <div>
                <h3>Price: {productData.price}$</h3>
              </div>
              <div>
                <h3> {productData.status}</h3>
              </div>
              <div>
                <Button variant="danger" onClick={() => handleDelete(productData._id)}>
                  Delete
                </Button>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
