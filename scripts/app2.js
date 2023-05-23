"use strict";

window.onload = function () {
  initDropdown("parkTypesDD", parkTypesArray);
  initDropdown("statesDD", locationsArray);
  initDropdown("natParksDD", nationalParksArray, "LocationName", "LocationID");
};

/* Global Scoped Variables */
const selectElements = document.querySelectorAll('.select-clear');
const cardContainer = document.getElementById("cardContainer");
const parkTypesDD = document.getElementById("parkTypesDD");
const statesDD = document.getElementById("statesDD");
const allNatParksDD = document.getElementById("natParksDD");

/* Dropdown Initialization */
function initDropdown(dropdownId, dataArray, textProp, valueProp) {
  const dropdown = document.getElementById(dropdownId);

  // Setting default option
  const defaultOption = new Option("Select one...", "null");
  dropdown.add(defaultOption);

  dataArray.forEach((data) => {
    const text = textProp ? data[textProp] : data;
    const value = valueProp ? data[valueProp] : data;
    dropdown.add(new Option(text, value));
  });
}
