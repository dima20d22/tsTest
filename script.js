"use strict";
let number = 21;
console.log(number);
const input = document.querySelector('.inputAufgabe');
const button = document.querySelector('.ButtonAufgabe');
const list = document.querySelector('.listAufgabe');
if (input && button) {
    button === null || button === void 0 ? void 0 : button.addEventListener('click', function (e) {
        e.preventDefault();
        const inputValue = input.value;
        console.log(inputValue);
    });
}
else {
    console.log('.inputAufgabenicht gefunden!');
}
function render() {
    if (list) {
        list.innerHTML = '';
    }
    else {
        console.log('.listAufgabe не найден!');
    }
}
