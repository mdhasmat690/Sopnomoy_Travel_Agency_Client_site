import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import "./MangeOrder.css";

const ManageOrder = () => {
  const [allData, setAllData] = useState([]);
  const [aprove,setaprove]= useState(false)
  useEffect(() => {
    fetch("https://calm-fjord-54492.herokuapp.com/placeOrders")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, [aprove]);
  console.log(allData);

  const approveOrder = (id) => {
    console.log(id);
    fetch(`https://calm-fjord-54492.herokuapp.com/placeOrders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    }).then(() =>{
      setaprove(true)
    })
  };

  const handleDeletedata = (id) => {
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

  return (
    <div>
      <div className="container bg-color">
        <h2>All orders</h2>

        {allData?.map((data) => (
          <div className="" key={data?._id}>
            <div className="manage-order-style my-5">
              <div>
                <h4>{data?.name}</h4>
              </div>
              <div>
                <h4>{data?.place}</h4>
              </div>
              <div>
                <h4>{data?.status}</h4>
              </div>
              <div className="btn-stylee">
                <Button className="ml-3" onClick={() => approveOrder(data._id)}>
                  approveOrder
                </Button>

                {/* <Button variant="danger">Primary</Button> */}
                <Button variant="danger" onClick={() => handleDeletedata(data._id)}>
                  Delete
                </Button>
              </div>

            </div>
          </div>
        ))}

        {/* <button onClick={() => approveOrder("617d160838e4447667495509")}>
          Approve order
        </button> */}
      </div>
    </div>
  );
};

export default ManageOrder;
