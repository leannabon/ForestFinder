"use strict";

window.onload = function () {
  initLocationsDropdown();
  initNationParksDropdown();

};

function initLocationsDropdown() {
  locationsArray.forEach((location) =>
    document
      .querySelector("#states")
      .add(new Option(location, location))
  );
};

function initNationParksDropdown() {
    //grab seach input van textbox always make it lowercase
    const mySearchinput = document
    .getElementById("inputLocation");

  nationalParksArray.forEach((park) =>
    document
      .querySelector("#natParkdropdown")
      .add(new Option(park.LocationName, park.LocationName))
  );
};

function searchLocation() {

  // Selected option
  const states = document.querySelector("#states");
  let selectedState = states.options[states.selectedIndex].text; 
  alert(selectedState);

  // Finding National Park based on searchinput
};

  /*Global Scoped Variables */
  const selectElements = document.querySelectorAll('.select-clear');
  const cardContainer = document.getElementById("cardContainer");
  const statesDD = document.getElementById("states");
  const natParksDD = document.getElementById("natParkdropdown");


  /*Displaying Info based off of selected value*/
statesDD.addEventListener("change", function () {
    const selectedValue = this.value;
  
    // Call the initialization function to get the updated array
    const updatedArray = initNationParksDropdown(selectedValue);
  
    // Display the properties from the updated array
    updatedArray.forEach((park) => {
    // Create card elements
    const card = document.createElement("div");
    card.classList.add("card", "mb-3");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = park.LocationName;

    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = park.Address;

    // Append card elements to the card container
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);
    cardContainer.appendChild(card);
    });
  });

  /*Clearing select elements that are not selected*/
  function clearSelectElements(exceptElement) {
    selectElements.forEach((element) => {
      if (element !== exceptElement) {
        element.value = '';
      }
    });
  }
  selectElements.forEach((element) => {
    element.addEventListener('change', function() {
      clearSelectElements(this);
    });
  });