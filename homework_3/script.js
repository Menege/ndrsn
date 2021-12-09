"use strict";

const concatHelper = (func, val) => {
  const reduceValue = (args, seedValue) =>
    args.reduce((acc, a) => {
      return func.call(func, acc, a);
    }, seedValue);
  const next = (...args) => {
    
    return (...x) => {
      if (!x.length) {
        return reduceValue(args, val);
      }
      return next(...args, reduceValue(x, val));
    };
  };
  return next();
};

const concatStrings = concatHelper((x, y) => x + y, "");
console.log(concatStrings('first')('second')('third')()); 
