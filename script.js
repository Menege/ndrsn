"use strict";

let number = document.querySelector(".post__display-grid");
let sign = document.querySelector(".post__display-grid-sign");
let input = document.querySelector(".post__input");
let acc = "";


const commaEight = (x) =>
  x.toString().includes(".") ? x.toString().split(".").pop().length : 0;
const isCommaEight = (num) => (commaEight(num) > 8 ? true : false);

let handlerFrac = function (value) {
  if (Math.floor(value) !== value)
      return value.toString().split(".")[1].length || 0;
  return 0;
}

function round(result) {
  let out = Math.round((+result).toFixed(10).toString().slice(10) / 10);
  return handlerFrac(+result) > 8 ? (+result).toFixed(8) : +(result);
}


number.addEventListener("click", (e) => {
  if (e.target.innerHTML === "C") {
    input.innerHTML = "";
    acc = "";
    return;
  }

  if (e.target.innerHTML === "." && !input.innerHTML.includes(".")) {
    input.innerHTML += e.target.innerHTML;
    return;
  }

  if (
    e.target.className.includes("post__button") &&
    e.target.innerHTML !== "." &&
    e.target.innerHTML !== "C"
  )
    return (input.innerHTML += e.target.innerHTML);
});

sign.addEventListener("click", (e) => {
  switch (e.target.innerHTML) {
    case "sqr":
      input.innerHTML *= input.innerHTML;
      break;
    case "sqrt":
      input.innerHTML = Math.sqrt(input.innerHTML);
      break;
    case "±":
      input.innerHTML *= -1;
      break;
    case "sqrt":
      input.innerHTML /= input.innerHTML;
      break;
    case "+":
      acc += input.innerHTML + "+";
      input.innerHTML = "";
      break;
    case "-":
      acc += input.innerHTML + "-";
      input.innerHTML = "";
      break;
    case "/":
      acc += input.innerHTML + "/";
      input.innerHTML = "";
      break;
    case "*":
      acc += input.innerHTML + "*";
      input.innerHTML = "";
      break;
    case "=":
      acc += input.innerHTML;
      input.innerHTML = math.eval(acc);
      if (isCommaEight(input.innerHTML)) {
        input.innerHTML = round(+input.innerHTML)
      }
      acc = "";
      break;
    default:
      break;
  }
});
