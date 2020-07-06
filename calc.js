// Variable
const display = document.querySelector('.displayscreen');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equals');
const numButtons = document.querySelectorAll('.calc');

//Init condition
let equation = "";
display.value = "0";

//Event listeners for clicking on calculator buttons

equalButton.addEventListener('click', () => {
    if (equation != "") {
        equation = eval(equation)
        display.value = equation;
    }
});

clearButton.addEventListener('click', () => {
    display.value = "0";
    equation = "";
});

for (let i =0; i<numButtons.length; i++) {
    numButtons[i].addEventListener('click', () =>{
        equation += numButtons[i].innerHTML;
        display.value = equation;
    });
}