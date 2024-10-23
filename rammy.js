const display = document.querySelector(".display")
const buttons = document.querySelector("button")
const SpecialChars = ["%", "*", "/","-" , "+", "=" ]
let output = "";

//Define function to calculate based on button clicked.
const calculate = (btnvalue) => {
    if (btnvalue === "=" && output !== "") {
//if output has "%", replace with "/100" before evaluating.
output = eval(output.replace("%", "/100"));
    } else if (btnvalue === "AC") {
        output = "";
    }  else if (btnvaalue === "DEL") {
//if DEL button is clicked ,remove the last character from the output.
output = output.toString().slice(o, -1);
    } else {
        //if output is empty and button is specialChars then return
        if (output === "" && SpecialChars.includes(btnvalue)) return;
        output += btnvalue;
    }
    display.value = output;
};

//Add event listener to buttons, call calculate() on click.
buttons.forEach((button) => {
    //Button click listener to calls calculate() with dataset value as argument.
    button.addEventlistener("click", (e) => calculate (e.target.dataset.value));
})