// You should use multiple array methods to solve these problems. Don't use `for` loops!
// Using the provided `peopleArray` (bottom of this article), write a function that:
// 1. Returns a list of everyone older than 18, which is (.filter)
// 2. sorted alphabetically by last name, and where (.sort)
// 3. each name and age is embedded in a string that looks like an HTML `<li>` element.(.map)

var peopleArray = [
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47,
  },
  {
    firstName: "Frank",
    lastName: "Zappa",
    age: 12,
  },
  {
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78,
  },
  {
    firstName: "Morty",
    lastName: "Smith",
    age: 29,
  },
  {
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27,
  },
  {
    firstName: "Pasha",
    lastName: "Datsyuk",
    age: 13,
  },
  {
    firstName: "Lev",
    lastName: "Tolstoy",
    age: 82,
  },
];

function sortedOfAge(arr) {
  return arr
    .filter(function (person) {
      if (person.age > 18) {
        return person.firstName + " " + person.lastName;
      }
    })
    .sort(function (a, b) {
      if (a.lastName > b.lastName) {
        return 1;
      } else if (a.lastName < b.lastName) {
        return -1;
      } else {
        return 0;
      }
    })
    .map(function (person) {
      return (
        "<li>" +
        person.firstName +
        " " +
        person.lastName +
        " is " +
        person.age +
        "<li>"
      );
    });
}

// function sortedOfAge(arr) {
//   const filtered = arr
//     .filter(function (person) {
//       if (person.age > 18) {
//         return person.firstName + " " + person.lastName;
//       }
//     })
//     .sort(function (a, b) {
//       if (a.lastName > b.lastName) {
//         return 1;
//       } else if (a.lastName < b.lastName) {
//         return -1;
//       } else {
//         return 0;
//       }
//     });
//   return filtered.map(function (person) {
//     return (
//       "<li>" +
//       person.firstName +
//       " " +
//       person.lastName +
//       " is " +
//       person.age +
//       "<li>"
//     );
//   });
// }

console.log(sortedOfAge(peopleArray));
