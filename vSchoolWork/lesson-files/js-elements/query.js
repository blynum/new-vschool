// queryselector = select a single elements from the page. (returns the first element it finds that matches)

// var result = document.querySelector("#favorite-things")
// console.log(result)

// Can look up specific elements in the list

var result = document.querySelector("ol#favorite-things > li")
console.log(result)







// queryseletorAll = select all elements from the page that match the query. This also allows me to select as CSS elements (either .class or #id)

// var result = document.querySelectorAll("#favorite-things")
// console.log(result.length)

var result = document.querySelectorAll("ol#favorite-things > li")
console.log(Array.from(result))

// Added for Loop to change text on page 

for (var i = 0; i < result.length; i++) {
    result[i].textContent = "** REDACTED **"
}
