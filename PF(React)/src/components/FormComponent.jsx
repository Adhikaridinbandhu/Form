import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Form.css";

const FormComponent = ({ onSubmit, isEditing, formData, handleChange }) => {
  return (
    <form
      className="container form-wrapper"
      id="registrationForm"
      onSubmit={onSubmit}
    >
      <h1>Personal Details</h1>
      <div className="mb-3">
        <label htmlFor="exampleInputName1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={formData.name}
          onChange={handleChange}
          id="exampleInputName1"
          aria-describedby="nameHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputAddress1" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          name="address"
          id="exampleInputAddress1"
          value={formData.address}
          onChange={handleChange}
          aria-describedby="AddressHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={formData.email}
          onChange={handleChange}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPhone1" className="form-label">
          Phone no.
        </label>
        <input
          type="text"
          className="form-control"
          name="phone"
          id="exampleInputPhone1"
          value={formData.phone}
          onChange={handleChange}
          aria-describedby="phoneHelp"
        />
      </div>
      <button type="submit" className="btn btn-primary" id="btn-submit">
        {isEditing ? "Update" : "Submit"}
      </button>
    </form>
  );
};

export default FormComponent;
