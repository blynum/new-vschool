const form = document.marioForm;

function gooPest(num) {
  return num * 5;
}
console.log(gooPest(1));

function bobPest(num) {
  return num * 7;
}
console.log(bobPest(2));

function cheePest(num) {
  return num * 11;
}
console.log(cheePest(3));

function sum(num1, num2, num3) {
  return gooPest(num1) + bobPest(num2) + cheePest(num3);
}
console.log(sum(1, 2, 3));

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const gooPest = form.gooPest.value;
  const bobPest = form.bobPest.value;
  const cheePest = form.cheePest.value;
  const total = sum(gooPest, bobPest, cheePest);
  form.gooPest.value = "";
  form.bobPest.value = "";
  form.cheePest.value = "";
  const h1 = document.getElementById("total");
  h1.textContent = "Total Price: " + "$" + total;
  // document.getElementsByClassName("totalPrice")[0].append(h1);
});
