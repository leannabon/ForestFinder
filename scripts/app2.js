"use strict";

/* Global Scoped Variables */
const selectElements = document.querySelectorAll('.select-clear');
const cardContainer = document.getElementById("cardContainer");
const parkTypesDD = document.getElementById("parkTypesDD");
const statesDD = document.getElementById("statesDD");
const allNatParksDD = document.getElementById("natParksDD");



    // Get the checkbox values
    const parkTypeCheckbox = document.getElementById("parkTypeCheckbox");
    const stateCheckbox = document.getElementById("stateCheckbox");

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

/*Card Generation */
function createParkCard(park) {
    let cardHTML = `<div class="card">
    <div class="shadow" style="--url: url('https://i.ibb.co/PM4ghD4/full.png')"></div>
      <div class="content">
        <h5 class="card-title">${park.LocationName}</h5>`;

    if (park.Address) {
        cardHTML += `<p class="card-text">${park.Address}</p>`;
    }
    cardHTML += `<p class="card-text">${park.City}, ${park.State}</p>`;
    if (park.ZipCode) {
        cardHTML += `<p class="card-text">Zip Code: ${park.ZipCode}</p>`;
    }

    if (park.Visit) {
        cardHTML += `<p class="card-text"><a href="${park.Visit}">Visit their website!</a></p>`;
    }

    cardHTML += `</div>
      </div>`;

    return cardHTML;
}


/* Display Selected Park Information from allNatParksDD*/
function displayParkInformation() {
    const selectedParkId = allNatParksDD.value;

    // Find the selected park from the nationalParksArray
    const selectedPark = nationalParksArray.find((park) => park.LocationID === selectedParkId);

    // Clear the existing card container content
    cardContainer.innerHTML = "";

    if (!selectedPark) {
        // No park is selected or found
        const message = document.createElement("p");
        message.textContent = "Please select a park.";
        cardContainer.appendChild(message);
        return;
    }

    // Create the card element for the selected park
    const cardHTML = createParkCard(selectedPark);

    // Append the card HTML to the card container
    cardContainer.innerHTML = cardHTML;
}

/* Filter National Parks */
function filterNationalParks() {
    const selectedParkType = parkTypesDD.value;
    const selectedState = statesDD.value;

    // Filter the parks based on the selected options
    let filteredParks = nationalParksArray;

    if (stateCheckbox.checked) {
        filteredParks = filteredParks.filter(park => park.State === selectedState);
    }

    if (parkTypeCheckbox.checked) {
        filteredParks = filteredParks.filter(park => park.LocationName.includes(selectedParkType));
    }

    // Clear existing cards
    cardContainer.innerHTML = "";

    // Generate cards for filtered parks
    if (filteredParks.length === 0) {
        if (!parkTypeCheckbox.checked && !stateCheckbox.checked) {
            // Both checkboxes are unchecked
            const message = document.createElement("p");
            message.textContent = "No boxes are checked yet!";
            cardContainer.appendChild(message);
        } else {
            // No parks matching the conditions
            const message = document.createElement("p");
            message.textContent = "No parks matching the selected criteria!";
            cardContainer.appendChild(message);
        }
    } else {
        filteredParks.forEach(park => {
            const cardHTML = createParkCard(park);
            const cardElement = document.createElement("div");
            cardElement.innerHTML = cardHTML;
            cardContainer.appendChild(cardElement);
        });
    }
}




/* Event Listeners */
window.onload = function () {
    initDropdown("parkTypesDD", parkTypesArray);
    initDropdown("statesDD", locationsArray);
    initDropdown("natParksDD", nationalParksArray, "LocationName", "LocationID");

    //Filter Button Event
    const filterBtn = document.getElementById("filterBtn");
    filterBtn.addEventListener("click", filterNationalParks);

    //natParksDD Select Event
    allNatParksDD.addEventListener("change", displayParkInformation);
};