import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";

const Order = () => {
  const [LoggedInUserInfo] = useContext(UserContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const productUri = `https://blueberry-sundae-37209.herokuapp.com/order/${LoggedInUserInfo.email}`;
    try {
      const response = await axios.get(productUri);
      const data = response.data.order;
      setProducts(data);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h2>Your Orders</h2>
      {products?.map((product, i) => (
        <div className="card border-0 mb-3 shadow text-center" key={i}>
          <div className="row d-flex justify-content-between align-items-center p-3 m-3">
            <div className="col-md-2">
              <img style={{ width: "75px" }} src={product.image} alt="" />
            </div>
            <div className="col-md-3">
              <p>{product.product}</p>
            </div>
            <div className="col-md-2">
              <p>Qty: {product.quantity}</p>
            </div>
            <div className="col-md-3">
              <p>Placed on: {product.date}</p>
            </div>
            <div className="col-md-2">
              <p>
                <span class="badge bg-primary">{product.status}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Order;
