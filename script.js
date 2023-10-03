const addCarInput = document.querySelector("#add-car-input");
const addCarButton = document.querySelector("#add-car-button");
const searchCarInput = document.querySelector("#search-car-input");
const searchCarButton = document.querySelector("#search-car-button");
const carList = document.querySelector("#car-list");
const searchedCarList = document.querySelector("#searched-car-list");

carListArray = [];

const addingCarToArray = () => {
  const slicedCarName = addCarInput.value.trim();

  carListArray.push(slicedCarName);

  const newLi = document.createElement("li");
  newLi.textContent = slicedCarName;
  newLi.style.listStyle = "none";
  carList.appendChild(newLi);
};

const checkInput = () => {
  if (addCarInput.value === "") {
    alert("Please enter a value");
  } else if (carListArray.includes(slicedCarName)) {
    alert("Sorry, Item already exist on the list");
  } else {
    addingCarToArray();
    addCarInput.value = "";
  }
};

addCarButton.addEventListener("click", function () {
  // addingCarToArray();
  checkInput();
});

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    // addingCarToArray();
    checkInput();
  }
});

//
//

// const searchingCarEvent = (e) => {
//   console.log("hello", e);

//   // if (carListArray.includes(searchCarInput.value)) {
//   //   searchedCarList.textContent = searchCarInput.value;
//   // }
// };

// const searchingCar = () => {
//   searchCarInput.addEventListener("keyup", (searchingCarEvent) => {
//     searchingCarEvent();
//   });
// };

// searchCarButton.addEventListener("click", () => {
//   searchingCar();
// });
