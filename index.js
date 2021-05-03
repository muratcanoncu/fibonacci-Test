const cache = [];

module.exports = function fib(n) {
  if (cache[n]) {
    return cache[n];
  } else if (n === 0) {
    return (cache[n] = 0);
  } else if (n === 1) {
    return (cache[n] = 1);
  } else if (typeof n !== "number" || n < 0 || n % 1 !== 0) {
    return "Error Message";
  } else {
    return (cache[n] = fib(n - 1) + fib(n - 2));
  }
};
