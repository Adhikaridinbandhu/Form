import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Form.css";

const DataTable = ({ items, handleEdit, handleDelete }) => {
  return items.length > 0 ? (
    <div
      className="card-wrapper container d-flex"
      style={{ flexWrap: "wrap" }}
      id="card-wrapper"
    >
      {items.map((data, index) => (
        <div className="card" style={{ width: "18rem" }} key={index}>
          <img
            src="https://images.unsplash.com/photo-1719937206498-b31844530a96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
            className="card-img-top"
            alt="image data"
          />
          <div className="card-body" id="card-data">
            <p className="card-text">
              <strong>Name: </strong>
              {data.name}
            </p>
            <p className="card-text">
              <strong>Address: </strong>
              {data.address}
            </p>
            <p className="card-text">
              <strong>Email: </strong>
              {data.email}
            </p>
            <p className="card-text">
              <strong>Phone no: </strong>
              {data.phone}
            </p>
            <div className="btn-wrapper">
              <button
                className="btn btn-primary"
                onClick={() => handleEdit(index)}
              >
                Edit Data
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="no-data-para">No data submitted yet</p>
  );
};

export default DataTable;
