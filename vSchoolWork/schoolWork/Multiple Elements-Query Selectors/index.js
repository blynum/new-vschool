//Multiple Elements document.getElementByClassName and document.getElementByID

/*var things = document.getElementsByClassName("things")
console.log(things[0])*/

var things = document.getElementsByClassName("things")
for (var i = 0; i < things.length; i++) {
    console.log(things[i].innerText)
}


//querySelector - single element from the page; find the 1st element the matches the css selector

//var result = document.querySelector("#favorite-things")
//console.log(result)
//querySelectorAll - select all elements from the page the matches the query

var result2 = document.querySelectorAll("ol#favorite-things > li");

//result2[0].style.backgroundColor = 'black';
console.log(Array.from(result2))

//using a 'for loop'

for (var i = 0; i < result2.length; i++) {
    result2[i].textContent = "** REDACTED **"
}


