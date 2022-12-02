function memoize(fn) {
  let cache = {};
  return function (number){
    if (number in cache){
      return cache[number]
    }
    const newFactorial = fn(number);
    cache[number] = newFactorial;
    return newFactorial
  }
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

let factory = memoize(factorial);
console.log(factory(10));
console.log(factory(6));
console.log(factory(5));

