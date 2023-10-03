const addCarInput = document.querySelector("#add-car-input");
const addCarButton = document.querySelector("#add-car-button");
const carListUl = document.querySelector("#car-list");
const searchCarInput = document.querySelector("#search-car-input");
const searchCarButton = document.querySelector("#search-car-button");
const searchedCarList = document.querySelector("#searched-car-list");

carListUl.style.display = "none";
searchedCarList.style.display = "none";

carlistArray = [];

const addingCarToArray = () => {
  trimmedCarName = addCarInput.value.trim();

  if (carlistArray.includes(trimmedCarName)) {
    alert("Sorry, Item is already on the list");
  } else {
    carlistArray.push(trimmedCarName);

    const carListLi = document.createElement("li");
    carListLi.textContent = trimmedCarName;
    carListLi.style.listStyle = "none";
    carListUl.style.display = "block";
    carListUl.appendChild(carListLi);
  }
  console.log(carlistArray);
};

const checkingInput = () => {
  if (addCarInput.value === "") {
    alert("Please enter a value");
  } else {
    addingCarToArray();
    addCarInput.value = "";
  }
};

addCarButton.addEventListener("click", () => {
  checkingInput();
});

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkingInput();
  }
});

// searching car

searchCarInput.addEventListener("keyup", (e) => {
  console.log(e.target.value);
  if (carlistArray.includes(e.target.value)) {
    const searchedCarListLi = document.createElement("li");
    searchedCarListLi.textContent = e.target.value;
    searchedCarListLi.style.listStyle = "none";
    searchedCarList.style.display = "block";
    searchedCarList.appendChild(searchedCarListLi);

    searchCarInput.value = "";
  }
});
