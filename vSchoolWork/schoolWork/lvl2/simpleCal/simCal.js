const addForm = document.addCal;
const subForm = document.subCal;
const mulForm = document.mulCal;

function add(addFirstNum, addSecondNum) {
  return Number(addFirstNum) + Number(addSecondNum);
}

// let sum = add();

// Submit Event
addForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const addFirstNum = addForm.addFirstNum.value;
  const addSecondNum = addForm.addSecondNum.value;
  const result = add(addFirstNum, addSecondNum);
  addForm.addFirstNum.value = "";
  addForm.addSecondNum.value = "";
  const h1 = document.createElement("h1");
  h1.textContent = "The Sum is: " + result;
  document.getElementsByClassName("addCal")[0].append(h1);
});

function sub(subFirstNum, subSecondNum) {
  return Number(subFirstNum) - Number(subSecondNum);
}
console.log(sub(1, 3));

subForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const subFirstNum = subForm.subFirstNum.value;
  const subSecondNum = subForm.subSecondNum.value;
  const result = sub(subFirstNum, subSecondNum);
  subForm.subFirstNum.value = "";
  subForm.subSecondNum.value = "";
  const h1 = document.createElement("h1");
  h1.textContent = "The Difference is: " + result;
  document.getElementsByClassName("subCal")[0].append(h1);
});

function mul(mulFirstNum, mulSecondNum) {
  return Number(mulFirstNum) * Number(mulSecondNum);
}

mulForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const mulFirstNum = mulForm.mulFirstNum.value;
  const mulSecondNum = mulForm.mulSecondNum.value;
  const result = mul(mulFirstNum, mulSecondNum);
  mulForm.mulFirstNum.value = "";
  mulForm.mulSecondNum.value = "";
  const h1 = document.createElement("h1");
  h1.textContent = "The Product is: " + result;
  document.getElementsByClassName("mulCal")[0].append(h1);
});
