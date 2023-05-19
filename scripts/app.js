"use strict";

window.onload = function () {
  //Load the location dropdown
  initLocationDropdown();
  initNationParksDropdown();
};

function initLocationDropdown() {}

function initNationParksDropdown() {
  nationalParksArray.forEach((park) =>
    document
      .querySelector("#parktype")
      .add(new Option(park.LocationName, park.LocationName))
  );
}

function searchLocation() {
  //grab seach input van textbox always make it lowercase
  const mySearchinput = document
    .getElementById("inputLocation")
    .value.toLowerCase();

  const states = document.querySelector("#states");
  let selectedState = states.options[states.selectedIndex].text; // Selected option

  alert(selectedState);

  // Finding National PArk based on searchinput
}
