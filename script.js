const addCarInput = document.querySelector("#add-car-input");
const addCarButton = document.querySelector("#add-car-button");
const searchCarInput = document.querySelector("#search-car-input");
const searchCarButton = document.querySelector("#search-car-button");
const carList = document.querySelector("#car-list");
const searchedCarList = document.querySelector("#searched-car-list");

carListArray = [];

const mainConditional = () => {
  const slicedCarName = addCarInput.value.trim();

  if (addCarInput.value === "") {
    alert("Please enter a value");
  } else if (carListArray.includes(slicedCarName)) {
    alert("Sorry, Item already exist on the list");
  } else {
    carListArray.push(slicedCarName);

    const newLi = document.createElement("li");
    newLi.textContent = slicedCarName;
    newLi.style.listStyle = "none";
    carList.appendChild(newLi);

    addCarInput.value = "";
    console.log(carListArray);
  }
};

addCarButton.addEventListener("click", function () {
  mainConditional();
});

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    mainConditional();
  }
});

//
//

const searchingCar = () => {
  if (carListArray.includes(searchCarInput.value)) {
    searchedCarList.textContent = searchCarInput.value;
  }
};

searchCarButton.addEventListener("click", () => {
  searchingCar();
});
