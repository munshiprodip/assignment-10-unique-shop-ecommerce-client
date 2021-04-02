import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const productUri = `https://blueberry-sundae-37209.herokuapp.com/product`;
    try {
      const response = await axios.get(productUri);
      const data = response.data.product;
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    const productUri = `https://blueberry-sundae-37209.herokuapp.com/product/${id}`;
    try {
      const response = await axios.delete(productUri);
      console.log(response);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row d-flex g-0">
      <div
        className="col-md-3 bg-dark text-light"
        style={{ minHeight: "100vh" }}
      >
        <div className="p-3 text-center">
          <h2>UNIQUE SHOP BD</h2>
        </div>
        <div className="ps-5 active" style={{ backgroundColor: "#ddd" }}>
          <Link className="nav-link active text-dark fs-5 " to="/admin">
            <span>
              <i className="fas fa-cubes pe-3"></i>
            </span>
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

        <div className="ps-5">
          <Link className="nav-link active text-light fs-5" to="#">
            <span>
              <i className="fas fa-edit pe-3"></i>
            </span>{" "}
            Edit Products
          </Link>
        </div>
        <div className="ps-5">
          <Link className="nav-link active text-light fs-5" to="/">
            <span>
              <i class="fas fa-eye pe-3"></i>
            </span>{" "}
            View Shop
          </Link>
        </div>
      </div>

      <div className="col-md-9">
        <div className="col-md-12 bg-light">
          <h5 className="p-3 fs-3">Manage Product</h5>
        </div>
        <div className="card m-3 p-3 border-0 shadow table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Price</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              {products ? (
                products.map((product, i) => (
                  <tr key={i}>
                    <td>
                      <img src={product.image} alt="Product" width="75px" />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.gender}</td>
                    <td>{product.price}</td>
                    <td className="text-center">
                      <Link
                        className="btn btn-primary btn-sm m-1"
                        to={`/product/edit/${product._id}`}
                      >
                        <i className="fa fa-edit"></i>
                      </Link>
                      <button
                        className="btn btn-danger btn-sm m-1"
                        onClick={() => deleteProduct(product._id)}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">There was no product in your shop</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
