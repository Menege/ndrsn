"use strict";

let firstNumber = +prompt("Введите первое число", "");
let secondNumber = +prompt("Введите второе число", "");

function numSysHandler(firstNumber, secondNumber) {
  if (firstNumber && secondNumber) {
    console.log(firstNumber.toString(secondNumber));
  } else console.log("Некорректный ввод!");
}

function mathHandler(firstNumber, secondNumber) {
  if (firstNumber && secondNumber) {
    let sum = firstNumber + secondNumber;
    let div = firstNumber / secondNumber;
    console.log(`Ответ: ${sum}, ${div}`);
  } else console.log("Некорректный ввод!");
}

numSysHandler(firstNumber, secondNumber); // Задача под цифрой 1
mathHandler(firstNumber, secondNumber); // Задача под цифрой 2
