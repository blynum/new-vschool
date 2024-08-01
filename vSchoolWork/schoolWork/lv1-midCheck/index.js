//Constructor Function for the Books
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    //this.getDetails = function () {
    //console.log("Title: " + this.title + ", " + "Author: " + this.author + ", " + "Year: " + this.year);
    //}
}

//Write constructor function with method to instanitate new books
Book.prototype.getDetails = function () {
    console.log("Title: " + this.title + ", " + "Author: " + this.author + ", " + "Year: " + this.year);
}

//Two new Books
//const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
//console.log(book1.getDetails());
//book1.getDetails()
// Expected output: Title: The Great Gatsby, Author: F. Scott Fitzgerald, Year: 1925

////const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
//console.log(book2.getDetails()); 
//book2.getDetails()
// Expected output: Title: To Kill a Mockingbird, Author: Harper Lee, Year: 1960



//Add Robert to the end of the list using the push Array Methods    
const names = ["Jerry", "Adam"]
const person = { firstName: "Robert", lastName: "Jones", age: 37 }
//Expected Output: [ "Jerry", "Adam", "Robert"]

names.push(person.firstName)
console.log(names)

