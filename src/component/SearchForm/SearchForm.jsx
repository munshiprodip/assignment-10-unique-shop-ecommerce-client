import React from "react";

const SearchForm = () => {
  return (
    <div
      className="col-md-12 d-flex justify-content-center align-items-center"
      style={{ height: "200px" }}
    >
      <form className="form col-md-6">
        <div className="input-group mb-3">
          <input
            type="text"
            name="search"
            className="form-control"
            placeholder="Search product"
            aria-label="Search product"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Button
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
