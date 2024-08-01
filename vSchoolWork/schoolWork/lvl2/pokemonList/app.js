// Create a new instance of the XMLHttpRequest object.
const xhr = new XMLHttpRequest();

// Define what happens on each state change of the xhr object.
xhr.onreadystatechange = function () {
  // Check if the request has completed (readyState === 4) and was successful (status === 200).
  if (xhr.readyState === 4 && xhr.status === 200) {
    // xhr.responseText contains the response data as a string.
    const JSONdata = xhr.responseText;
    console.log(typeof JSONdata); // Logs the type of JSONdata, which should be "string".

    // Parse the JSON string to convert it to a JavaScript object.
    var data = JSON.parse(JSONdata);
    console.log(typeof data); // Logs the type of data, which should now be "object".

    // Call the showData function with the first object's pokemon property from the parsed data.
    showData(data.objects[0].pokemon);
  }
};

// Defines the showData function that takes an array of pokemon as an argument.
function showData(arr) {
  // Loop through each item in the array.
  for (let i = 0; i < arr.length; i++) {
    // Create a new <h1> element for each pokemon.
    const h1 = document.createElement("h1");
    // Set the text content of the <h1> element to the name of the current pokemon.
    h1.textContent = arr[i].name;
    // Append the <h1> element to the body of the document, displaying the pokemon name on the webpage.
    document.body.appendChild(h1);
  }
}

// Initializes a new request as a "GET" to the specified URL.
xhr.open("GET", "https://api.vschool.io/pokemon", true);

// Sends the request.
xhr.send();
