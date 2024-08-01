// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type `number`:

function sum(x, y) {
  if (typeof x === "string" || typeof y === "string") {
    throw "Input should be a number";
  }
  return x + y;
}
console.log(sum(3, 1));

// 1b) Call the `sum` function inside a `try` block using `"1"` and `"2"` as arguments. Use `console.log` within a `catch` block to inform the user of the error.

try {
  sum("1", "5");
} catch (err) {
  console.error(err);
}

// 2a) Given a user object, write a function called `login` that takes a `username` and `password` as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying `"login successful!"`

let user = { username: "sam", password: "123abc" };
function login(username, password) {
  if (username !== "sam") {
    throw "Does Not Match";
  }
  if (password !== "123abc") {
    throw "Does Not Match";
  } else {
    console.log("login successful");
  }
}


// 2b) Call the `login` function within a `try` block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!

try {
  login("sam", "123acb");
} catch (err) {
  console.error(err);
}

//console.log(login("samm", "123abc"));
console.log(login("sam", "123abc"));