const addCarInput = document.querySelector("#add-car-input");
const addCarButton = document.querySelector("#add-car-button");
const searchCarInput = document.querySelector("#search-car-input");
const searchCarButton = document.querySelector("#search-car-button");
const carList = document.querySelector("#car-list");

carListArray = [];

const mainConditional = () => {
  const slicedCarName = addCarInput.value.trim();
  if (addCarInput.value === "") {
    alert("Please enter a value");
  } else if (carListArray.includes(slicedCarName)) {
    alert("Sorry item already exist on the list");
  } else {
    carListArray.push(slicedCarName);
    console.log(carListArray);
    for (let i = 0; i < carListArray.lenght; i++) {
      carList.innerHTML = "hello";
      console.log("in loop");
    }
    // carList.innerHTML = slicedCarName;
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
