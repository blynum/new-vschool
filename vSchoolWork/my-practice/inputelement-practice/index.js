
/* this is the <p>
let out_Text = document.getElementById("outputText")*/

/* this is the <input> 
let input_Text = document.getElementById("inputText")*/


/* function iOT_Run() {
    input_Text.setAttribute('value', 'defaultValue');
    out_Text.innerHTML =
        "Value = " + "'" + input_Text.value + "'";
} */
const form = document.myForm

let inputText = form.inputText;

console.log(inputText.value)

let outText = document.getElementById('outputText');
form.addEventListener("submit", (event) => {
    event.preventDefault(),
        outText.textContent = inputText.value
    /*         printDoc() */
})
//this creates the paragraph and prints it to the screen, if the <p> wasn't in the HTML 
function printDoc() {
    const paraItem = document.createElement("p")
    paraItem.textContent = inputText.value
    document.body.appendChild(paraItem)
}


