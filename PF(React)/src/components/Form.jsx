import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Form.css";

const Form = () => {
  const [enteredName, setName] = useState("");
  const [enteredAddress, setAddress] = useState("");
  const [enteredEmail, setEmail] = useState("");
  const [enteredPhone, setPhone] = useState("");

  let submittedData = [];

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeAddress = (event) => {
    setAddress(event.target.value);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  const changePhone = (event) => {
    setPhone(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    let formData = {
      enteredName,
      enteredAddress,
      enteredEmail,
      enteredPhone,
    };
    submittedData.push({ ...formData });
    console.log(submittedData);
  };

  return (
    <div>
      <form
        className="container form-wrapper"
        id="registrationForm"
        onSubmit={submitHandler}
      >
        <h1>Personal Details</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={enteredName}
            onChange={changeName}
            id="exampleInputName1"
            aria-describedby="nameHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputAddress1" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputAddress1"
            value={enteredAddress}
            onChange={changeAddress}
            aria-describedby="AddressHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={enteredEmail}
            onChange={changeEmail}
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
            id="exampleInputPhone1"
            value={enteredPhone}
            onChange={changePhone}
            aria-describedby="phoneHelp"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" id="btn-submit">
          Submit
        </button>
      </form>
      <div
        className="card-wrapper container d-flex"
        style={{ flexWrap: "wrap" }}
        id="card-wrapper"
      >
        <div className="card" style={{ width: "18rem" }} id="card-body">
          <img
            src="https://images.unsplash.com/photo-1719937206498-b31844530a96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
            className="card-img-top"
            alt="image data"
          />
          <div className="card-body" id="card-data">
            <p className="card-text">
              <strong>Name: </strong>Din Bandhu Adhikari
            </p>
            <p className="card-text">
              <strong>Address: </strong>Galyang
            </p>
            <p className="card-text">
              <strong>Email: </strong>abcdjpt@gmail.com
            </p>
            <p className="card-text">
              <strong>Phone no: </strong>9846902145
            </p>
            <div className="btn-wrapper">
              <a href="#" className="btn btn-primary">
                Edit Data
              </a>
              <a href="#" className="btn btn-danger">
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;
