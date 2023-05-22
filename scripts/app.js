"use strict";

window.onload = function () {
  initLocationsDropdown();
  initNationParksDropdown();

};

  /*Global Scoped Variables */
  const selectElements = document.querySelectorAll('.select-clear');
  const cardContainer = document.getElementById("cardContainer");
  const statesDD = document.getElementById("states");
  const natParksDD = document.getElementById("natParkdropdown");


function initLocationsDropdown() {
  locationsArray.forEach((location) =>
    document
      .querySelector("#states")
      .add(new Option(location, location))
  );
};

function initNationParksDropdown(selectedState) {
  // Filter the nationalParksArray based on the selected state
  const filteredParks = nationalParksArray.filter((park) => park.State === selectedState);

  // Clear the existing options in the dropdown
  const dropdown = document.querySelector("#natParkdropdown");
  dropdown.innerHTML = "";

  // Add the filtered parks as options to the dropdown
  filteredParks.forEach((park) => {
    const option = new Option(park.LocationName, park.LocationName);
    dropdown.add(option);
  });
  return filteredParks;
}

function searchLocation() {
  const states = document.querySelector("#states");
  const selectedState = states.options[states.selectedIndex].text;

  alert(selectedState);

  // Call the initialization function to update the dropdown options
  initNationParksDropdown(selectedState);
}


  /*Displaying Info based off of selected value*/
  statesDD.addEventListener("change", function () {
    const selectedValue = this.value;
  
    // Call the initialization function to get the updated array
    const updatedArray = initNationParksDropdown(selectedValue);
  
    // Clear the existing card container content
    cardContainer.innerHTML = "";
  
    // Create a row element with Bootstrap classes
    const rowHTML = '<div class="row row-cols-2 g-3">';
  
    // Create card elements for each park
    const cardsHTML = updatedArray.map((park) => {
      // Create the card HTML content
      let cardHTML = `<div class="col">
        <div class="card mb-3 h-100 border-success text-success">
          <div class="card-body">`;
  
      // Check if the 'visit' property is defined before creating the anchor element
      if (park.Visit !== undefined) {
        cardHTML += `<h5 class="card-title"><a href="${park.Visit}" class="text-success" style="text-decoration: none;" target="_blank">${park.LocationName}🔗</a></h5>`;
      } else {
        cardHTML += `<h5 class="card-title">${park.LocationName}</h5>`;
      }

      // Check if the 'Address' property is defined
      if (park.Address !== 0) {
        cardHTML += `<p class="card-text">${park.Address}</p>`
      } else {
        cardHTML += ``;
      }  

      cardHTML += `<p class="card-text">${park.City}, ${park.State}</p>`
      if (park.ZipCode !== 0) {
        cardHTML += `<p class="card-text">${park.ZipCode}</p>`
      } else {
        cardHTML += ``;
      }  
      cardHTML += 
      `</div>
      </div>
      </div>`;
  
      return cardHTML;
    });
  
    // Concatenate the card HTML strings
    const cardsContainerHTML = cardsHTML.join('');
  
    // Concatenate the row and card container HTML strings
    const finalHTML = rowHTML + cardsContainerHTML + '</div>';
  
    // Set the innerHTML of the card container
    cardContainer.innerHTML = finalHTML;
  });
  