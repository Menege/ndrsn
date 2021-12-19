"use strict";

// Array.prototype.myFilter = function (callback, arr = this) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i]) === true) {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// };

// let a = [2, 11, 31, 44, 33, 52];
// let result=a.myFilter(i=>i>10);
// console.log(result)

// class Calculator {
//   constructor(...args) {
//     if (args.length===2) {
//       this._X = args[0];
//       this._Y = args[1];
//     } else throw new Error('Вы ввели не подходящее количество аргументов')
//   }

//   setX(newValue) {
//     if (typeof newValue === 'number') {
//       this._X = newValue;
//     } else throw new Error('Параметр не валидный')
//   }

//   setY(newValue) {
//     if (typeof newValue === 'number') {
//       this._Y = newValue;
//     } else throw new Error('Параметр не валидный')
//   }

//   logSum=()=>{
//     console.log(this._X + this._Y)
//   }

//   logMul=()=>{
//     console.log(this._X * this._Y)
//   }

//   logSub=()=>{
//     console.log(this._X - this._Y)
//   }

//   logDiv=()=> {
//     if (this._Y!==0) {
//       console.log(this._X / this._Y)
//     } else throw new Error('Второй параметр равен нулю')
//   }
// }

// const calculator = new Calculator(12, 3);
// calculator.logSum(); // 15
// calculator.logDiv(); // 4
// calculator.setX(15);
// calculator.logDiv(); // 5
// const logCalculatorDiv = calculator.logDiv;
// logCalculatorDiv(); // 5
// calculator.setY(123n); // Ошибка!

// class Stack {
//   constructor(arg = 10) {
//     if (typeof arg === "number") {
//       this._arg = arg;
//       this._arr = [];
//     } else throw new Error("Вы ввели не подходящий аргумент");
//   }

//   push = (elem) => {
//     if (this._arr.length < this._arg) {
//       this._arr.push(elem);
//     } else throw new Error("Стек переполнен");
//   };

//   pop = () => {
//     if (this.isEmpty) {
//       return this._arr.pop();
//     } else throw new Error("Стек пуст");
//   };

//   peek = () => {
//     if (this.isEmpty) {
//       let lastElemCount = this._arr.length-1;
//       return this._arr[lastElemCount];
//     } else return null;
//   };

//   isEmpty = () => {
//     if (this._arr.length) {
//       return false;
//     } else return true;
//   };

//   toArray = () => {
//     if (this.isEmpty) {
//       let newArray = this._arr;
//       return newArray;
//     } else throw new Error("Стек пуст");
//   };

//   static fromIterable(iterable) {
//     if (!iterable[Symbol.iterator]) {
//       throw new Error('Вы ввели не итерируемое значение');
//     }

//     const newStack = new Stack(iterable.length);

//     for (let elem of iterable) {
//       newStack.push(elem);
//     }

//     return newStack;
//   }
// }
