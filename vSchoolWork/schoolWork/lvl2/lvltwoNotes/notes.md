# Higher Array Methods

// .map() - returns a new array the same size as the input array
// allow me to take an array of data and create a new array of data from it.

# Web Storage

// Local storage:persists on page refresh and closing of the browser

// Session Storage: does not persist on refresh or closing of the browser

// Both session and local are saved as JSON (JavaScript Object Notation) in the browser. To check where this is inspect page and go to application to find local or session storage

// JSON - JavaScript Object Notation
// JSON.stringify => turning JS into JSON
// JSON.parse => turning JSON into JSON

# JS Timing Functions

# setInterval

Purpose: Call a function on a repeated basis. (i.e: every 1 second)

# setTimout

Purpose: Call a function after a certain amount of time

- When used, both setInterval and setTimeout return an ID. That ID can be given clearInterval or clearTimeout to stop the timers.

# Error Handling

    ## Keywords
        *try
        *catch
        *finally
        *throw
        *Error

# ES6 Review

let and const scope to the nearest curly bracket
var scopes to the functions curly bracket
const = once declared cannot be redeclared

    ## Keywords
        *arrow functions
        *rest
        *spread
        *destructuring in a parameter
        *default parameter

# URL

    #Uniform Resource Locator

    - www.amazon.com/clothing

    # Base URL = www.amazon.com

    # Endpoint = /clothing/jackets/d5890f

    # Parameter = requesting specific resources from a database (id)
    - /clothing/jackets/d5890f
    - /clothing/jackets/:_id

    # Query (query strings)
     -www.amazon.com/clothing/jackets?color=black&type=leather

     const query = {
         color: black,
         type:  leather
     }

AJAX

# XMLHttpRequest constructor

    - The Javascript XMLHttpRequest constructor is used to make asynchronous HTTP requests from a javascript application.

    - This constructor uses callbacks to track the progress of a server requests and handle the response sent back.

    // xhr.onreadystatechange
    // xhr.readyState
    // xhr.status

- Two methods are used to set up and send the HTTP request, these methods are: - xhr.open() - to set up the request - xhr.send() - to send the request
  - The xhr object will also store the data received from the server as the xhr.responseText
    - For the servers we will be using, the responseText will be in JSON format.
