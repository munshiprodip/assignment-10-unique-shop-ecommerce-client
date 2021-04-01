import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

const EditProduct = () => {
  const { productId } = useParams();
  const [formData, setFormData] = useState();
  const history = useHistory();
  console.log(formData);

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    const submitUri = `https://blueberry-sundae-37209.herokuapp.com/product/${productId}`;
    e.preventDefault();
    try {
      const response = await axios.put(submitUri, formData);
      console.log(response);
      history.push("/admin");
    } catch (error) {
      console.error(error);
    }
  };

  const [product, setProduct] = useState({});
  const { name, gender, price } = product;

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const productUri = `https://blueberry-sundae-37209.herokuapp.com/product/${productId}`;
    try {
      const response = await axios.get(productUri);
      const data = response.data.product[0];
      setProduct(data);
      setFormData({
        name: data.name,
        gender: data.gender,
        price: data.price,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex">
      <div className="col-md-3 bg-dark text-light" style={{ height: "100vh" }}>
        <div className="p-3 text-center">
          <h2>UNIQUE SHOP BD</h2>
        </div>
        <div className="ps-5">
          <Link className="nav-link active text-light fs-5" to="/admin">
            <span>
              <i className="fas fa-cubes pe-3"></i>
            </span>{" "}
            Manage Products
          </Link>
        </div>
        <div className="ps-5">
          <Link className="nav-link active text-light fs-5" to="/product/add">
            <span>
              <i className="fas fa-plus pe-3"></i>
            </span>{" "}
            Add Products
          </Link>
        </div>

        <div className="ps-5" style={{ backgroundColor: "#ddd" }}>
          <Link className="nav-link active text-dark fs-5" to="#">
            <span>
              <i className="fas fa-edit pe-3"></i>
            </span>{" "}
            Edit Products
          </Link>
        </div>

        <div className="ps-5">
          <Link className="nav-link active text-light fs-5" to="/">
            <span>
              <i className="fas fa-eye pe-3"></i>
            </span>{" "}
            View Shop
          </Link>
        </div>
      </div>

      <div className="col-md-9">
        <div className="col-md-12 bg-light">
          <h5 className="p-3 fs-3">Add Product</h5>
        </div>
        <div className="card m-3 p-3 border-0 shadow">
          <form className="form p-3" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group py-2">
                  <label>Product name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter product name"
                    onChange={handleInputChange}
                    defaultValue={name}
                    required
                  ></input>
                </div>
                <div className="form-group py-2">
                  <label>Price</label>
                  <input
                    type="text"
                    name="price"
                    className="form-control"
                    placeholder="Enter product price"
                    onChange={handleInputChange}
                    defaultValue={price}
                    required
                  ></input>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group py-2">
                  <label>Gender</label>
                  <select
                    name="gender"
                    className="form-control"
                    onChange={handleInputChange}
                    defaultValue={gender}
                    required
                  >
                    <option value="">Select one</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Male & Female">Male & Female</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12 d-flex justify-content-between mt-3">
                <button className="btn btn-danger" type="reset">
                  CLEAR
                </button>
                <button className="btn btn-primary" type="submit">
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
