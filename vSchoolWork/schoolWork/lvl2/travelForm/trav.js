const form = document.travelForm;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstName = form.firstName.value;
  const lastName = form.lastName.value;
  const age = form.age.value;
  const gender = form.gender.value;
  const city = form.city.value;
  const checkedDiet = [];
  for (let i = 0; i < form.diet.length; i++) {
    if (form.diet[i].checked) {
      checkedDiet.push(form.diet[i].value);
    }
  }
  alert(
    "First Name: " +
    firstName +
    "\nLast Name: " +
    lastName +
    "\nAge: " +
    age +
    "\nGender: " +
    gender +
    "\nDesired Location: " +
    city +
    "\nDiet Restriction: " +
    checkedDiet
  );
  //   console.log(city);
});
