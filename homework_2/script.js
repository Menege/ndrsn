"use script";

// //Первая задача
// function makeObjectDeepCopy(obj) {
//   let clone = {};
//   for (var i in obj) {
//     if (obj[i] != null && typeof obj[i] == "object")
//       clone[i] = makeObjectDeepCopy(obj[i]);
//     else clone[i] = obj[i];
//   }
//   return clone;
// }



// //Вторая задача
// function selectFromInterval(arr, intervalFirst, intervalSecond) {
//   function isNum(elem) {
//     return isNaN(+elem);
//   }

//   if (!Array.isArray(arr) || arr.some(isNum)) {
//     throw new Error("Невалидный массив");
//   }

//   if (isNum(intervalFirst) || isNum(intervalSecond)) {
//     throw new Error("Невалидные интервалы");
//   }

//   if (intervalFirst < intervalSecond) {
//     return arr.filter(
//       (elem) => intervalFirst <= elem && intervalSecond >= elem
//     );
//   } else {
//     return arr.filter(
//       (elem) => intervalSecond <= elem && intervalFirst >= elem
//     );
//   }
// }
// console.log(selectFromInterval([1, 3, 5], 5, 2));
// console.log(selectFromInterval([-2, -15, 0, 4], -13, -5));
// console.log(selectFromInterval(["aaa"], 2, 3));

// //Третья задача

// const myIterable = { from: 'aaa', to: 4 };

// myIterable[Symbol.iterator] = function () {
//   if (this.from > this.to || isNaN(+this.from) || isNaN(+this.to)) {
//     throw new Error("Ошибка!");
//   }
//   return {
//     current: this.from,
//     last: this.to,
//     next() {
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     },
//   };
// };

// for (let item of myIterable) {
//   console.log(item); // 1, 2, 3, 4
// }
