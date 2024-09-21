let formData = document.getElementById("registrationForm");

let tableBody = document.getElementById("card-body");

let nameElement = document.getElementById("exampleInputName1");

let addressElement = document.getElementById("exampleInputAddress1");

let emailElement = document.getElementById("exampleInputEmail1");

let contactElement = document.getElementById("exampleInputPhone1");

let btnElement = document.getElementById("btn-submit");

let CardWrapper = document.getElementById("card-wrapper");
CardWrapper.innerHTML = "";

tableBody.innerHTML = "";

let submittedData = [];

formData.addEventListener("submit", function (event) {
  event.preventDefault();

  let inputValue = {
    enteredName: nameElement.value,
    enteredAddress: addressElement.value,
    enteredEmail: emailElement.value,
    enteredContact: contactElement.value,
  };
  submittedData.push(inputValue);
  nameElement.value = "";
  addressElement.value = "";
  emailElement.value = "";
  contactElement.value = "";
  displayData();
});

function displayData() {
  let html = "";
  submittedData.forEach(function (ele, index) {
    html += `<div class="card" style="width: 18rem" id="card-body">
        <img
          src="https://images.unsplash.com/photo-1719937206498-b31844530a96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
          class="card-img-top"
          alt="image data"
        />
        <div class="card-body" id="card-data">
          <p class="card-text"><strong>Name: </strong>${ele.enteredName}</p>
          <p class="card-text"><strong>Address: </strong>${ele.enteredAddress}</p>
          <p class="card-text"><strong>Email: </strong>${ele.enteredEmail}</p>
          <p class="card-text"><strong>Phone no: </strong>${ele.contact}</p>
          <div class="btn-wrapper">
            <a href="#" class="btn btn-primary">Edit Data</a>
            <a href="#" class="btn btn-danger">Delete</a>
          </div>
        </div>
      </div>`;
  });

  CardWrapper.innerHTML = html;
}
