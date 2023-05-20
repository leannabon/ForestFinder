


// Assuming you have an array called 'dataArray'
const dataArray = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

// Function to perform the search and display the filtered results
function search() {
  // Get the search input value from the HTML input field
  const searchInput = document.getElementById('searchInput').value;

  // Filter the array based on the search term
  const filteredArray = dataArray.filter((element) =>
    element.toLowerCase().includes(searchInput.toLowerCase())
  );

  // Get the <ul> element to display the results
  const ul = document.getElementById('searchResults');

  // Clear any existing content in the <ul>
  ul.innerHTML = '';

  // Check if any results were found
  if (filteredArray.length === 0) {
    const li = document.createElement('li');
    li.textContent = 'No results found.';
    ul.appendChild(li);
  } else {
    // Iterate over the filtered array and create <li> elements to display the results
    filteredArray.forEach((element) => {
      const li = document.createElement('li');
      li.textContent = element;
      ul.appendChild(li);
    });
  }
}
